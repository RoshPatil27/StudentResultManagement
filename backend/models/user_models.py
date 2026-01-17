from pydantic import BaseModel, EmailStr
from typing import Optional

# Base User
class UserBase(BaseModel):
    name: str
    email: EmailStr
    password: str

# Role-based Users
class StudentUser(UserBase):
    roll_no: str
    class_name: str

class TeacherUser(UserBase):
    subject: str
    employee_id: str

class AdminUser(UserBase):
    admin_code: str  # extra verification field
