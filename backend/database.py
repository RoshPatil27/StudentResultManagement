from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGODB_URL = os.getenv("MONGODB_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME")

client = MongoClient(MONGODB_URL, serverSelectionTimeoutMS=5000)

# Force connection check
client.server_info()

db = client[DATABASE_NAME]
result_collection = db["results"]
student_collection = db["students"]
teacher_collection = db["teachers"]
admin_collection = db["admins"]
