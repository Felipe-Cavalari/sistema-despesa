import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center gap-4">
      <Image
        src={'/LogoDonnaAdriana.png'}
        width={300}
        height={300}
        alt="logo Dona adriana"
      />
      <h1 className="text-4xl font-bold pb-4">Sistema de Despesas</h1>
      <p className="text-sm text-center md:text-md">
        Parabéns! Você está logado, clique no botão e acesse o Dashboard
      </p>
      <Button className="w-56 md:w-76">
        <Link href={'/dashboard'}>DashBoard</Link>
      </Button>
    </div>
  )
}
