import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'

export default async function DeletarCategoria(id: string) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>X</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deseja excluir essa categoria? </DialogTitle>
        </DialogHeader>
        <DialogFooter className="grid grid-cols-2">
          <Button>Sim</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
