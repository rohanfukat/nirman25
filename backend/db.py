import motor.motor_asyncio

MONGODB_URL = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URL)
db = client["Farmer_DB"]

user_collection = db["User_Data"]
farm_vist_collection = db["Farm_Visit"]