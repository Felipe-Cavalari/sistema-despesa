'use client'

import Image from 'next/image'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const cadastroForm = z.object({
  email: z.string().email(),
  nome: z.string(),
})

type cadastroForm = z.infer<typeof cadastroForm>

export default function FormCadastro() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<cadastroForm>()

  async function handlecadastro(data: cadastroForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Usuario cadastrado com sucesso', {
        description: 'Cadastro realizado com sucesso',
        action: {
          label: 'Login',
          onClick: () => router.push('/login'),
        },
      })
    } catch {
      toast.error('E-mail incorreto', {
        description: 'Confira se já não existe esse email cadastrado',
        action: {
          label: 'Tentar novamente',
          onClick: () => handlecadastro(data),
        },
      })
    }
  }

  return (
    <>
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center items-center">
            <Image
              src={'/LogoDonnaAdriana.png'}
              width={200}
              height={200}
              alt="logo padaria"
              priority
            />
            <h1 className="text-2xl font-bold tracking-tight">
              Cadastro no painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Adicione novos usuários no painel de despesas
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handlecadastro)}>
            <div className="space-y-2">
              <Label htmlFor="email">Nome</Label>
              <Input
                type="string"
                id="nome"
                className=""
                {...register('nome')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                className=""
                {...register('email')}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
