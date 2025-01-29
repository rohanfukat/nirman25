from fastapi import FastAPI,UploadFile,File,Form, Depends, HTTPException
from models import userRegister,userLogin,farmerDetail,prediction,insuranceDetail,weatherInfo
from db import user_collection,farm_vist_collection,farm_insurance
from fastapi.middleware.cors import CORSMiddleware
import cloudinary.uploader
from typing import List
from fastapi.security import  OAuth2PasswordRequestForm
import joblib, numpy as np

from auth import create_access_token,ACCESS_TOKEN_EXPIRE_MINUTES,get_current_user
from datetime import datetime, timedelta

import requests
import os

import cloudinary
from cloudinary.utils import cloudinary_url

# Configuration       
cloudinary.config( 
    cloud_name = "docjytgd5", 
    api_key = "468118645327335", 
    api_secret = "xWiOFtIkDwqF1GrnHs-1YA1ifoM", # Click 'View API Keys' above to copy your API secret
    secure=True
)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","http://127.0.0.1:5173"],  # specific frontend ka URL de sakte ho
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("crop_recommendation_model.pkl")
label_encoder = joblib.load("label_encoder.pkl")

@app.get("/")
def demo():
    return {"hello world"}

@app.get("/test")
async def test():
    result = await user_collection.insert_one({"name": "example", "value": "data"})
    print(f"Document inserted with id: {result.inserted_id}")


@app.post("/register")
async def user_register(user:userRegister):
    result = await user_collection.insert_one(user.model_dump())
    print(f"Document inserted with id: {result.inserted_id}")
    return {"User Created Successfully "}

@app.post("/login")
async def user_login(form_data: userLogin):
    # print(form_data)
    user = await user_collection.find_one({"username":form_data.email})
    # print(user)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    #  if not user or not verify_password(form_data.password, user["hashed_password"]):
    #     raise HTTPException(status_code=400, detail="Invalid credentials")
    
    if user['password'] != form_data.password:
        raise HTTPException(status_code=404, detail="Invalid Credentials")

    access_token = create_access_token({"sub": form_data.email}, timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    return {"access_token": access_token, "token_type": "bearer"}
    # return {"User Login Successfully"}
   

@app.post("/farm-visit")
async def add_farm(
                file:UploadFile = File(...),
                name:str = Form(...),
                village:str = Form(...),
                location:str = Form(...),
                acres:str = Form(...),
                crop:str = Form(...),
                time_slot:str = Form(...)
                ):
           
        try:
            file_content = await file.read()
            metadata = farmerDetail(name=name,village=village,location=location,acres=acres,crop=crop,time_slot=time_slot)

            upload_result = cloudinary.uploader.upload(file_content, resource_type = "image")

            image_url = upload_result.get("secure_url")
            data = {
                "name": metadata.name,
                "village":metadata.village,
                "location": metadata.location,
                "acres": metadata.acres,
                "crop": metadata.crop,
                "time_slot": metadata.time_slot,
                "url" : str(image_url)
            }

            result = await farm_vist_collection.insert_one(data)

            return {"Farm Visit Details Added Successfully":str(result)}
        
        except Exception as e:
            return e


@app.post("/farm-bot")
async def farmbot(ip:str):
    token = os.environ.get("FRIENDLI_TOKEN") or "flp_IYfBv9QNlY3kDKQp2Ng7E01n0okNldMIA0jVd9HXRHZw71"

    url = "https://api.friendli.ai/dedicated/v1/completions"

    headers = {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
    }

    payload = {
    "model": "stzo5c8ouje2",
    "prompt": ip,
    "max_tokens": 2048,
    "top_p": 0.8
    }

    response = requests.request("POST", url, json=payload, headers=headers)

    return str(response.text)

def serialize_document(document):
    document["_id"] = str(document["_id"])  # Convert ObjectId to string
    return document

@app.get("/all-farm-visit", response_model=List[dict])
async def allFarmVisit():
    cursor = farm_vist_collection.find()  # Find all documents in the collection
    documents = []
    
    async for document in cursor:
        documents.append(serialize_document(document))
    
    return documents
    
@app.get("/protected-route")
def protected_route(username: str = Depends(get_current_user)):
    return {"message": f"Hello {username}, you have access to this route!"}


@app.post("/model-prediction")
def prediction(p : prediction):
    print("Model & Label Encoder loaded successfully!")

    custom_data = np.array([p.nitrogen, p.phosphorus, p.potassium, p.temp, p.humidity, p.ph, p.rainfall], dtype=np.float32).reshape(1, -1)

    # Predict probabilities
    probabilities = model.predict_proba(custom_data)

    # Convert probabilities to percentage
    sorted_indices = np.argsort(probabilities[0])[::-1]
    sorted_classes = label_encoder.inverse_transform(sorted_indices)
    sorted_probabilities = probabilities[0][sorted_indices] * 100
    
    result = {label: round(float(prob),2) for label, prob in zip(sorted_classes, sorted_probabilities)}

    # print(result)
    return result

@app.post("/insurance-details")
async def add_insurance(
                file:UploadFile = File(...),
                name:str = Form(...),
                email:str = Form(...),
                description:str = Form(...)):
    
    file_content = await file.read()
    insurance_data = insuranceDetail(name=name,email=email,description=description)

    upload_result = cloudinary.uploader.upload(file_content, resource_type = "image")

    image_url = upload_result.get("secure_url")

    data = {
        "name": insurance_data.name,
        "email": insurance_data.email,
        "description": insurance_data.description,
        "url" : str(image_url)
    }

    result = await farm_insurance.insert_one(data)

    return {"Farm Insurance Details Added Successfully":str(result)}


@app.post("/weather-info")
def weatherInfo(loc:weatherInfo):
    API_KEY = "fdbabb1dbd4edda75b0391ce4ccee92b"
    BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
    url = f"{BASE_URL}?q={loc.location}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return {"error": "City not found"}