import FornecedoresTable from './components/FornecedoresTable'
import FornecedoresDialog from './components/fornecedores-dialog'

export default function Fornecedores() {
  return (
    <div className="flex flex-col gap-4 min-h-screen px-4 py-6">
      <h1 className="text-3xl font-bold tracking-tight">Forncedores</h1>
      <FornecedoresDialog />
      <FornecedoresTable />
    </div>
  )
}
