from pydantic import BaseModel
from typing import List

class ResultRequest(BaseModel):
    name: str
    marks: List[int]
