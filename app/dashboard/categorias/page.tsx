import CategoriasTable from './components/categoria-table'

export default function Categorias() {
  return (
    <div className="flex flex-col gap-4 min-h-screen px-4 py-6">
      <h1 className="text-3xl font-bold tracking-tight">Categorias</h1>
      <CategoriasTable />
    </div>
  )
}
