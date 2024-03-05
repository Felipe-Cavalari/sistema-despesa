'use client'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader2, X } from 'lucide-react'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

interface DeletarCategoriaForm {
  name: string
  id: string
}

const deletarCategoria = z.object({
  id: z.string(),
  name: z.string(),
})

type DeletarCategoria = z.infer<typeof deletarCategoria>

export default function DeletarCategoriaForm(del: DeletarCategoria) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<DeletarCategoria>({
    resolver: zodResolver(deletarCategoria),
  })

  async function handleDeletarCategoria({ name, id }: DeletarCategoria) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log(`id:${id} name:${name}`)
      // await fetch(`http://localhost:3333/categorias/${id}`, {
      //   method: 'DELETE',
      // })
      toast.success('Categoria deletada com sucesso')
    } catch (error) {
      toast.error('Ops categoria', {
        description: `${error}`,
        action: {
          label: 'Tentar novamente',
          onClick: () => {
            handleSubmit(handleDeletarCategoria)
          },
        },
      })
    }
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleDeletarCategoria)}
      method="DELETE"
    >
      <div className="w-full">
        <Input value={del.name} readOnly {...register('name')} />
        <Input value={del.id} readOnly {...register('id')} className="hidden" />
      </div>
      <div className="grid grid-cols-2 space-x-2">
        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="size-5 mr-2 animate-spin" />
          ) : (
            <Check className="size-5 mr-2" />
          )}
          Sim
        </Button>
        <DialogClose asChild>
          <Button type="button" variant="secondary" disabled={isSubmitting}>
            <X /> Cancelar
          </Button>
        </DialogClose>
      </div>
    </form>
  )
}
