from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import ResultRequest
from result_utils import calculate_total, calculate_percentage, assign_grade
from database import result_collection

app = FastAPI()

# ✅ CORS MUST be here
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


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

    # Insert but do NOT return DB object
    result_collection.insert_one(result_data.copy())

    return result_data

    try:
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

        result_collection.insert_one(result_data)
        return result_data

    except Exception as e:
        return {"error": str(e)}

