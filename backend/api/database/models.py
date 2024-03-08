from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

# class Produtos(Base):
#     __tablename__ = "produtos"
#     id = Column(Integer, primary_key=True)
#     nome_produto = Column(String, index=True)
#     fornecedor_id = Column(Integer, ForeignKey("fornecedores.id"))
#     fornecedor = relationship("Fornecedores", back_populates="produtos")
#     categoria_id = Column(Integer, ForeignKey("categoria.id"))
#     categorias = relationship("Categorias", back_populates="produtos")
    


# class Fornecedores(Base):
#     __tablename__ = "fornecedores"
#     id = Column(Integer, primary_key=True)
#     nome_fornecedor = Column(String, index=True)
#     categoria_id = Column(Integer, ForeignKey("categoria.id"))
#     categorias = relationship("Categorias", back_populates="fornecedores")


class Categorias(Base):
    __tablename__ = "categorias"
    id = Column(Integer, primary_key=True)
    nome_categoria = Column(String, index=True)
    value_categoria = Column(String, index=True)

    # fornecedor = relationship("Fornecedores", back_populates="categorias")
    



class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    items = relationship("Item", back_populates="owner")


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")






