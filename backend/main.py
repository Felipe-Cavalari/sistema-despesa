from fastapi import FastAPI
from api.endpoints import categorias

app = FastAPI()

@app.get('/')
async def read_root():
    return {"message": "Bem vindo a API do sistema de despesas"}



app.include_router(categorias.router)