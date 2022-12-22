from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from app.models import Monitor

router = APIRouter()


@router.post(
    "/",
    response_description="Create a new response",
    status_code=status.HTTP_201_CREATED,
    response_model=Monitor,
)
def create_book(request: Request, book: Monitor = Body(...)):
    book = jsonable_encoder(book)
    new_book = request.app.database["books"].insert_one(book)
    created_book = request.app.database["books"].find_one({"_id": new_book.inserted_id})

    return created_book


@router.get(
    "/", response_description="List all responses", response_model=List[Monitor]
)
def list_books(request: Request):
    books = list(request.app.database["books"].find(limit=100))
    return books


@router.get(
    "/{id}", response_description="Get a single response by id", response_model=Monitor
)
def find_book(id: str, request: Request):
    try:
        book = request.app.database["books"].find_one({"_id": id})
        return book
    except:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"response with ID {id} not found",
        )


# //<h1 className="card text-black mb-1"  style={{"height":"100px", "font-size": "30px"}} >{responseData['question'], null, 2}</h1>
