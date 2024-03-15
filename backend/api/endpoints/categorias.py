from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, FastAPI, HTTPException

from ..database import models, schemas, crud
from ..database.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

router = APIRouter()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get('/categorias/')
def GetCategorias():
    return {"categoria": "essa é uma categoria"}


@router.post('/categorias/', response_model=schemas.Categorias)
def CreateCategoria(categoria: schemas.CategoriasCreate, db: Session = Depends(get_db)):
    db_categoria = crud.GetCategoria(db, categoria=categoria.nome_categoria)
    if db_categoria:
        raise HTTPException(status_code=400, detail="Categoria já existe")
    return crud.CreateCategoria(db=db, categoria=categoria)
    



