import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import AdicionarCategoriaForm from './AdicionarCategoriaForm'

export default function AdicionarCategoria() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar Despesa</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Categorias das despesas</DialogTitle>
          <AdicionarCategoriaForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
