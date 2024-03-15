from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

class Produtos(Base):
    __tablename__ = "produtos"
    id = Column(Integer, primary_key=True)
    nome_produto = Column(String, index=True)
    fornecedor_id = Column(Integer, ForeignKey("fornecedores.id"))
    categoria_id = Column(Integer, ForeignKey("categorias.id"))

class Fornecedores(Base):
    __tablename__ = "fornecedores"
    id = Column(Integer, primary_key=True)
    nome_fornecedor = Column(String, index=True)
    categoria_id = Column(Integer, ForeignKey("categorias.id"))

class Categorias(Base):
    __tablename__ = "categorias"
    id = Column(Integer, primary_key=True)
    nome_categoria = Column(String, index=True, unique=True)
    value_categoria = Column(String, index=True, unique=True)
    fornecedor_id = Column(Integer, ForeignKey("fornecedores.id"))
    








