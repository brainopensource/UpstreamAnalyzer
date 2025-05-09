from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.api_endpoints import WOODMAC_LDI_ENDPOINT
from app.utils import get_with_retries


app = FastAPI()

# CORS middleware for development (allow all origins)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ImportDataRequest(BaseModel):
    username: str
    password: str
    params: dict = {"$top": "1", "$select": "reference_period"}

@app.post("/import-data")
def import_data(request: ImportDataRequest):
    print(f"[IMPORT-DATA] URL: {WOODMAC_LDI_ENDPOINT}")
    print(f"[IMPORT-DATA] Username: {request.username}")
    print(f"[IMPORT-DATA] Params: {request.params}")
    data = get_with_retries(
        WOODMAC_LDI_ENDPOINT,
        request.username,
        request.password,
        request.params
    )
    if "error" in data:
        raise HTTPException(status_code=400, detail=data["error"])
    return data


@app.get("/")
def root():
    return {"message": "Hello, FastAPI prototype!"} 