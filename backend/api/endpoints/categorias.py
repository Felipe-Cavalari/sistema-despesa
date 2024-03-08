from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, FastAPI, HTTPException

from ..database import models, crud, schemas
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


@router.get('/categorias/', response_model=schemas.Categorias)
async def read_categorias(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    categorias = crud.get_categorias(db, skip=skip, limit=limit)
    return categorias

@router.post('/categorias/', response_model=schemas.Categorias)
async def create_categoria(categoria: schemas.CategoriasCreate, db: Session = Depends(get_db)):
    db_categoria = crud.get_categoria(db, nome_categoria = categoria.nome_categoria)
    if db_categoria:
        raise HTTPException(status_code=400, detail="Categoria já existe")
    return crud.create_categoria(db, nome_categoria=categoria.nome_categoria, value_categoria=categoria.value_categoria)