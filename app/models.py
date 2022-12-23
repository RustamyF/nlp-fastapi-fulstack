import uuid
from pydantic import BaseModel, Field
import datetime


class Monitor(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    context: str = Field(...)
    question: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "context": """joseph Robinette Biden Jr. is an American politician who is the 46th and current
                president of the United States. A member of the Democratic Party, he previously served as the 47th
                vice president from 2009 to 2017 under President Barack Obama, and represented Delaware in the United
                States Senate from 1973 to 2009""",
                "question": "who is joseph Robinette Biden ?",
            }
        }


class ReturnMonitor(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    context: str = Field(...)
    question: str = Field(...)
    answer: str = Field(...)
    time: str = Field(...)
