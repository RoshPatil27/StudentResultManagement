from fastapi import APIRouter, HTTPException
from models.user_models import StudentUser, TeacherUser, AdminUser
from models.auth_models import LoginRequest
from database import student_collection, teacher_collection, admin_collection
from utils.security import hash_password, verify_password

router = APIRouter(prefix="/auth", tags=["Authentication"])

# ---------------- SIGNUP ---------------- #

@router.post("/signup/student")
def signup_student(user: StudentUser):
    try:
        hashed_password = hash_password(user.password)

        student_data = {
            "name": user.name,
            "email": user.email,
            "password": hashed_password,
            "roll_no": user.roll_no,
            "class_name": user.class_name
        }

        student_collection.insert_one(student_data)

        return {"message": "Student registered successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/signup/teacher")
def signup_teacher(user: TeacherUser):
    try:
        hashed_password = hash_password(user.password)

        teacher_data = {
            "name": user.name,
            "email": user.email,
            "password": hashed_password,
            "subject": user.subject,
            "employee_id": user.employee_id
        }

        teacher_collection.insert_one(teacher_data)

        return {"message": "Teacher registered successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/signup/admin")
def signup_admin(user: AdminUser):
    try:
        hashed_password = hash_password(user.password)

        admin_data = {
            "name": user.name,
            "email": user.email,
            "password": hashed_password,
            "admin_code": user.admin_code
        }

        admin_collection.insert_one(admin_data)

        return {"message": "Admin registered successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ---------------- LOGIN ---------------- #

@router.post("/login")
def login(data: LoginRequest):
    collection_map = {
        "student": student_collection,
        "teacher": teacher_collection,
        "admin": admin_collection
    }

    if data.role not in collection_map:
        raise HTTPException(status_code=400, detail="Invalid role")

    user = collection_map[data.role].find_one({"email": data.email})

    if not user or not verify_password(data.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {
        "message": "Login successful",
        "role": data.role,
        "user_name": user["name"]
    }

    collection_map = {
        "student": student_collection,
        "teacher": teacher_collection,
        "admin": admin_collection
    }

    if data.role not in collection_map:
        raise HTTPException(status_code=400, detail="Invalid role")

    user = collection_map[data.role].find_one({"email": data.email})

    if not user or not verify_password(data.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {
        "message": "Login successful",
        "role": data.role,
        "user_name": user["name"]
    }
