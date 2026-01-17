from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth import router as auth_router
from models.result_models import ResultRequest
from result_utils import calculate_total, calculate_percentage, assign_grade
from database import result_collection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth_router)

@app.post("/calculate-result")
def calculate_result(data: ResultRequest):
    total = calculate_total(data.marks)
    percentage = calculate_percentage(total, len(data.marks) * 100)
    grade = assign_grade(percentage)

    result_data = {
        "name": data.name,
        "marks": data.marks,
        "total": total,
        "percentage": round(percentage, 2),
        "grade": grade
    }

    result_collection.insert_one(result_data.copy())
    return result_data
