from fastapi import FastAPI
from api.endpoints import categorias, users


app = FastAPI()

@app.get('/')
async def read_root():
    return {"message": "Bem vindo a API do sistema de despesas"}



app.include_router(categorias.router)
app.include_router(users.router)