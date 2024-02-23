'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Check, Loader2 } from 'lucide-react'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const despesasForm = z.object({
  despesa: z.string(),
  categoria: z.string(),
  fornecedor: z.string(),
  data: z.string().datetime(),
  valor: z.string(),
})

type despesasForm = z.infer<typeof despesasForm>

export default function FormVariavel() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<despesasForm>()

  async function handleDespesas({
    despesa,
    categoria,
    fornecedor,
    data,
    valor,
  }: despesasForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      await fetch('http://localhost:3333/despesas', {
        method: 'POST',
        body: JSON.stringify({
          despesa,
          categoria,
          fornecedor,
          data,
          valor,
        }),
      })
      toast.success('Despesa criada com sucesso')
    } catch {
      toast.error('Algo deu errado', {
        description: 'Confira as informações inseridas e tente novamente',
        action: {
          label: 'Tentar novamente',
          onClick: () => {},
        },
      })
    }
  }

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(handleDespesas)}
      method="POST"
    >
      <div className="">
        <Label htmlFor="despesas">Despesa</Label>
        <Input type="text" id="despesas" {...register('despesa')} />
      </div>
      <div className="">
        <Label htmlFor="categoria">Categoria</Label>
        <Input type="text" id="categoria" {...register('categoria')} />
      </div>
      <div className="">
        <Label htmlFor="fornecedor">Fornecedor</Label>
        <Input type="text" id="fornecedor" {...register('fornecedor')} />
      </div>
      <div className="">
        <Label htmlFor="data">Data</Label>
        <Input type="date" id="data" {...register('data')} />
      </div>
      <div className="">
        <Label htmlFor="valor">Valor</Label>
        <Input type="text" id="valor" {...register('valor')} />
      </div>
      <Button className="w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="size-5 mr-2 animate-spin" />
        ) : (
          <Check className="size-5 mr-2" />
        )}
        Adicionar Despesa
      </Button>
    </form>
  )
}
