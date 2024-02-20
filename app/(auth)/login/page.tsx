'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const loginForm = z.object({
  email: z.string().email(),
})

type loginForm = z.infer<typeof loginForm>

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<loginForm>()

  async function handleLogin(data: loginForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Email de autenticação enviado com sucesso')
    } catch {
      toast.error('E-mail incorreto', {
        description: 'Confira se digitou corretamente seu email',
        action: {
          label: 'Tentar novamente',
          onClick: () => {},
        },
      })
    }
  }

  return (
    <>
      <div className="p-8">
        <Button className="absolute right-2 top-2 bg-primary">
          {' '}
          <Link href={'/cadastro'}>Adicionar novo usuario</Link>{' '}
        </Button>
        <div className="mt-6 flex w-64 md:w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center items-center">
            <Image
              src={'/LogoDonnaAdriana.png'}
              width={200}
              height={200}
              alt="logo padaria"
            />
            <h1 className="text-2xl font-bold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas despesas pelo painel!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                required
                type="email"
                id="email"
                className=""
                placeholder="seuemail@email.com"
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
