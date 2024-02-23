import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import DespesasDialog from './DespesasDialog'
import DespesasTableFilter from './DespesasTableFilter'

export default async function DespesasTable() {
  'use server'
  const response = await fetch('http://localhost:3333/despesas')
  const data = await response.json()

  let valorTotal = 0
  data.forEach((element: unknown) => {
    const valor = parseFloat(element.valor)
    valorTotal += valor
  })

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Despesas</h1>
      <div className="space-y-2.5">
        <div className="flex justify-between">
          <DespesasTableFilter />
          <DespesasDialog />
        </div>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Despesa</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow">
              {data.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell></TableCell>
                  <TableCell>{item.despesa}</TableCell>
                  <TableCell>{item.categoria}</TableCell>
                  <TableCell>{item.fornecedor}</TableCell>
                  <TableCell>{item.data}</TableCell>
                  <TableCell>R$ {parseFloat(item.valor)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell></TableCell>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell>R$ {valorTotal}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  )
}
