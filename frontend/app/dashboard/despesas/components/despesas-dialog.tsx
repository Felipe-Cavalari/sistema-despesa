import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import FormVariavel from './despesas-form-variavel'

export default function DespesasDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar Despesa</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Despesa Variável</DialogTitle>
          <DialogDescription>
            Adicione a despesa variavel aqui
          </DialogDescription>
        </DialogHeader>
        <FormVariavel />
      </DialogContent>
    </Dialog>
  )
}
