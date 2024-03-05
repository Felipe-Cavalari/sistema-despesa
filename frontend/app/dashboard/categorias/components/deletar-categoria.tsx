import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import DeletarCategoriaForm from './deletar-categoria-form'

interface DeletarCategoria {
  name: string
  id: string
}

export default async function DeletarCategoria(categoria: DeletarCategoria) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>X</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deseja excluir essa categoria? </DialogTitle>
        </DialogHeader>
        <DeletarCategoriaForm id={categoria.id} name={categoria.name} />
      </DialogContent>
    </Dialog>
  )
}
