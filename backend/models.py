from pydantic import BaseModel, EmailStr, Field


class userRegister(BaseModel):
    username: str
    email: EmailStr
    phone: str = Field(
        ..., min_length=10, description="Phone Number must be of 10 digits"
    )
    password: str = Field(
        ..., min_length=8, description="Password must be 8 characters long"
    )


class userLogin(BaseModel):
    email: EmailStr
    password: str = Field(
        ..., min_length=8, description="Password must be 8 characters long"
    )


class farmerDetail(BaseModel):
    name: str
    village: str
    location: str
    acres: str
    crop: str
    time_slot: str
