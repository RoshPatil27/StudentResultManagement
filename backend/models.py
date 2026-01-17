from pydantic import BaseModel
from typing import List

class ResultRequest(BaseModel):
    name: str
    marks: List[int]

class ResultResponse(BaseModel):
    name: str
    total: int
    percentage: float
    grade: str
