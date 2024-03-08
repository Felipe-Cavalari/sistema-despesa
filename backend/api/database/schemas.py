from pydantic import BaseModel

# class ProdutosBase(BaseModel):
#     nome_produto: str


# class ProdutosCreate(ProdutosBase):
#     pass 


# class Produto(ProdutosBase):
#     id: int
#     fornecedor_id: int 
#     categoria_id: int

#     class Config:
#         orm_mode = True

# """Configuração do schema Fornecedores"""

# class FornecedoresBase(BaseModel):
#     nome_fornecedor: str

# class FornecedoresCreate(FornecedoresBase):
#     pass

# class Fornecedores(FornecedoresBase):
#     id: int
#     categorias_id: int

#     class Config:
#         orm_mode = True

"""Configuração do schema Categorias"""
class CategoriasBase(BaseModel):
    nome_categoria: str
    value_categoria: str

class CategoriasCreate(CategoriasBase):
    pass

class Categorias(CategoriasBase):
    id: int

    class Config:
        orm_mode = True


class ItemBase(BaseModel):
    title: str
    description: str | None = None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    items: list[Item] = []

    class Config:
        orm_mode = True