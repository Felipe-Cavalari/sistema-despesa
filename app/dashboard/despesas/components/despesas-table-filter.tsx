import { Input } from '@/components/ui/input'
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

export default async function DespesasTableFilter() {
  const response = await fetch('http://localhost:3333/categorias')
  const data = await response.json()

  return (
    <div>
      <form className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros</span>
        <Input placeholder="Produto" className="h-8 w-[320px]" />
        <Input placeholder="Fornecedor" className="h-8 w-[320px]" />
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
      </form>
    </div>
  )
}
