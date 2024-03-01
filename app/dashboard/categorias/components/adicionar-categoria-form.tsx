'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader2 } from 'lucide-react'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const adicionarDespesa = z.object({
  item: z.string(),
})

type AdicionarDespesa = z.infer<typeof adicionarDespesa>

function getValueFromString(input: string): string {
  return input
    .normalize('NFD') // Normaliza os caracteres Unicode e separa a marcação do diacrítico
    .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
    .toLowerCase() // Converte para minúsculas
    .replace(/[^\w\s]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/^-+|-+$/g, '')
}

export default function AdicionarCategoriaForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = useForm<AdicionarDespesa>({ resolver: zodResolver(adicionarDespesa) })

  const value = watch('item') ? getValueFromString(watch('item')) : ''

  async function handleAdicionarDespesa({ item }: AdicionarDespesa) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(`item: ${item}, value: ${value}`)
      await fetch('http://localhost:3333/categorias', {
        method: 'POST',
        body: JSON.stringify({
          value,
          item,
        }),
      })
      toast.success('Categoria adicionada com sucesso')
    } catch {
      toast.error('Ops categoria', {
        description: 'Algo deu errado',
        action: {
          label: 'Tentar novamente',
          onClick: () => {},
        },
      })
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit(handleAdicionarDespesa)}>
      <div className="mt-5 space-y-2">
        <Label htmlFor="adicionar_categoria">Categoria</Label>
        <Input
          id="adicionar_categoria"
          type="text"
          placeholder="Adicione a categoria aqui.."
          {...register('item')}
        />
        <div className="hidden">
          <Label htmlFor="value">Slug</Label>
          <Input id="value" readOnly value={value} />
        </div>

        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="size-5 mr-2 animate-spin" />
          ) : (
            <Check className="size-5 mr-2" />
          )}
          Adicionar Despesa
        </Button>
      </div>
    </form>
  )
}
