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
                "context": "Don Quixote",
                "question": "Miguel de Cervantes",
            }
        }
