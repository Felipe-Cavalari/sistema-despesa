'use client'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

interface DeletarCategoriaForm {
  name: string
  id: string
}

const deletarCategoria = z.object({
  id: z.string(),
})

type DeletarCategoria = z.infer<typeof deletarCategoria>

export default function DeletarCategoriaForm(del: DeletarCategoriaForm) {
  const { register, handleSubmit, watch } = useForm<DeletarCategoria>({
    resolver: zodResolver(deletarCategoria),
  })

  async function handleDeletarCategoria({ categoria }: DeletarCategoria) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(`id: ${del.id}, `)
      await fetch('http://localhost:3333/categorias', {
        method: 'DELETE',
        body: JSON.stringify({
          del.id,
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
    <form className="flex flex-col gap-4">
      <div className="w-full">
        <Input value={del.name} readOnly />
      </div>
      <div className="grid grid-cols-2 space-x-2">
        <Button className="w-full">Sim</Button>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Cancelar
          </Button>
        </DialogClose>
      </div>
    </form>
  )
}
