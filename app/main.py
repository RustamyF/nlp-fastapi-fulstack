from fastapi import FastAPI
from pymongo import MongoClient
from app.routes import router as book_router

# from app.config import settings

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
db_url = "mongodb://root:rootpassword@localhost:27017"
db_name = "test"


@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(db_url)
    app.database = app.mongodb_client[db_name]


@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()


@app.get("/health")
def health_check():

    return {"result": "hello world"}


app.include_router(book_router, tags=["response"], prefix="/response")
