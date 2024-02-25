import Pagination from '@/components/Pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function FornecedoresTable() {
  return (
    <div className="space-y-2 ">
      <div className="border rounded-md overflow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xl"> Fornecedor </TableHead>
              <TableHead className="text-xl"> Categoria </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Fornecedor tal</TableCell>
              <TableCell>Categoria tal</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Pagination pageIndex={0} totalCount={50} perPage={12} />
    </div>
  )
}
