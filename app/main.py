from fastapi import FastAPI

# from dotenv import dotenv_values
from pymongo import MongoClient
from app.routes import router as book_router

# config = dotenv_values(".env")
from app.config import settings

app = FastAPI()


@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(settings.db_url)
    app.database = app.mongodb_client[settings.db_name]


@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()


@app.get("/health")
def list_books():

    return {"result": "hello world"}


app.include_router(book_router, tags=["books"], prefix="/book")
