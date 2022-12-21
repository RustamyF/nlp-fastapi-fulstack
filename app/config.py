import os

from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    db_url: str = Field(..., env="DATABASE_URL")
    db_name: str = Field(..., env="DB_NAME")


settings = Settings()
