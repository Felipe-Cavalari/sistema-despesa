import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import AdicionarFornecedorForm from './adicionar-fornecedor-form'

export default function FornecedoresDialog() {
  return (
    <div className="flex">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Adicionar Fornecedor</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle> Fornecedores </DialogTitle>
            <DialogDescription>Adicione um fornecedor</DialogDescription>
          </DialogHeader>
          <AdicionarFornecedorForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}
