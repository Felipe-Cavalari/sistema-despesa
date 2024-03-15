from pydantic import BaseModel


class ProdutosBase(BaseModel):
    nome_produto: str


class ProdutosCreate(ProdutosBase):
    pass 


class Produto(ProdutosBase):
    id: int
    fornecedor_id: int 
    categoria_id: int

    class Config:
        orm_mode = True


class FornecedoresBase(BaseModel):
    nome_fornecedor: str

class FornecedoresCreate(FornecedoresBase):
    pass

class Fornecedores(FornecedoresBase):
    id: int
    categoria_id: int

    class Config:
        orm_mode = True


class CategoriasBase(BaseModel):
    nome_categoria: str
    value_categoria: str

class CategoriasCreate(CategoriasBase):
    pass

class Categorias(CategoriasBase):
    id: int

    class Config:
        orm_mode = True
