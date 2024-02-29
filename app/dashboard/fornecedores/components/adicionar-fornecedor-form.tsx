import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Categoria {
  id: number
  value: string
  item: string
}

export default async function AdicionarFornecedorForm() {
  const response = await fetch('http://localhost:3333/categorias')
  const data = await response.json()

  return (
    <form action="" className="space-y-6">
      <div className="">
        <Label>Nome do Fornecedor</Label>
        <Input />
      </div>
      <div className="">
        <Label>Categoria do Fornecedor</Label>
        <Select defaultValue="all">
          <SelectTrigger className="h-8 w-[320px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as categorias</SelectItem>
            {data.map((categoria: Categoria) => (
              <SelectItem key={categoria.id} value={categoria.value}>
                {categoria.item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full">Adicionar Fornecedor</Button>
    </form>
  )
}
