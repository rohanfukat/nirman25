from fastapi import FastAPI,UploadFile,File,Form
from models import userRegister,userLogin,farmerDetail
from db import user_collection,farm_vist_collection
from fastapi.middleware.cors import CORSMiddleware
import cloudinary.uploader
from typing import List

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
async def user_login(user:userLogin):
    print(user)
    get_user = await user_collection.find_one({"email":user.email})
    if get_user == None:
        return {"User Not Found"}
    
    if get_user["password"] == user.password:
        return {"Login Sucessfull"}
    else:
        return {"Invalid Credentials"}
   

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
    


