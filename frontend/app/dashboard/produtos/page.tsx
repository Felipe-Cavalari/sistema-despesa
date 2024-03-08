import ProdutosTable from './produtos-table'

export default function Produtos() {
  return (
    <div className="flex flex-col gap-4 min-h-screen px-4 py-6">
      <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
      <ProdutosTable />
    </div>
  )
}
