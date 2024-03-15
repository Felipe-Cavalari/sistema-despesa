from sqlalchemy.orm import Session

from . import models, schemas


def GetCategoria(db:Session, categoria_id: int, nome_categoria: str):
    return db.query(models.Categorias).filter(models.Categorias == categoria_id).first()

def CreateCategoria(db:Session, categoria: schemas.CategoriasCreate):
    db_categoria = models.Categorias(nome_categoria=categoria.nome_categoria, value_categoria=categoria.value_categoria)
    db.add(db_categoria)
    db.commit()
    db.refresh(db_categoria)
    return db_categoria