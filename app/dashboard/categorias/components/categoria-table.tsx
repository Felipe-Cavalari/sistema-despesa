import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pen } from 'lucide-react'
import AdicionarCategoria from './adicionar-categoria-dialog'
import Pagination from '@/components/Pagination'
import DeletarCategoria from './deletar-categoria'

interface Categoria {
  id: number
  value: string
  item: string
}

export default async function CategoriasTable() {
  const response = await fetch('http://localhost:3333/categorias/')
  const data = await response.json()

  return (
    <div className="space-y-2 ">
      <AdicionarCategoria />
      <div className="border rounded-md overflow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead colSpan={3}></TableHead>
              <TableHead className="text-xl"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((categoria: Categoria) => (
              <TableRow key={categoria.id}>
                <TableCell></TableCell>
                <TableCell>{categoria.item}</TableCell>

                <TableCell>
                  <Button size="xs">
                    <Pen />
                  </Button>
                </TableCell>

                <TableCell>
                  <DeletarCategoria
                    id={String(categoria.id)}
                    name={String(categoria.item)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination pageIndex={0} totalCount={50} perPage={12} />
    </div>
  )
}
