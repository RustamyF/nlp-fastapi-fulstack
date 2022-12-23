from fastapi import APIRouter, Body, Request, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List
from app.models import Monitor, ReturnMonitor
import datetime
from src.server_pipeline import question_answering_pipeline

router = APIRouter()


@router.post(
    "/",
    response_description="Create a new response",
    status_code=status.HTTP_201_CREATED,
    response_model=ReturnMonitor,
)
def create_response(request: Request, event: Monitor = Body(...)):
    answer = question_answering_pipeline(question=event.question, context=event.context)
    event = jsonable_encoder(event)
    event["answer"] = answer
    event["time"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    new_response = request.app.database["books"].insert_one(event)
    created_response = request.app.database["books"].find_one(
        {"_id": new_response.inserted_id}
    )
    return created_response


@router.get(
    "/", response_description="List all responses", response_model=List[Monitor]
)
def list_responses(request: Request):
    books = list(request.app.database["books"].find(limit=100))
    return books


@router.get(
    "/{id}", response_description="Get a single response by id", response_model=Monitor
)
def find_response(id: str, request: Request):
    try:
        book = request.app.database["books"].find_one({"_id": id})
        return book
    except:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"response with ID {id} not found",
        )
