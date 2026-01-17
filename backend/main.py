from fastapi import FastAPI
from pydantic import BaseModel
from result_utils import calculate_total, calculate_percentage, assign_grade
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ResultRequest(BaseModel):
    name: str
    marks: list[int]

@app.post("/calculate-result")
def calculate_result(data: ResultRequest):
    total = calculate_total(data.marks)
    percentage = calculate_percentage(total, len(data.marks) * 100)
    grade = assign_grade(percentage)

    return {
        "name": data.name,
        "total": total,
        "percentage": round(percentage, 2),
        "grade": grade
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)