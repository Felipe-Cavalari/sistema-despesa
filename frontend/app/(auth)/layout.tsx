import { Wheat } from 'lucide-react'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-background md:grid md:grid-cols-2 min-h-screen">
      <div className="hidden md:flex md:bg-[#70310b] flex-col justify-between p-10 text-white">
        <div className="flex gap-5 items-center">
          <Wheat className="size-7" />
          <span>Sistema de Despesas Padaria Donna Adriana</span>
        </div>
        <footer>
          Painel do parceiro &copy; Padarina Donna Adriana -{' '}
          {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col justify-center items-center">
        {children}
        <footer className="text-[10px] fixed text-center bottom-1 md:hidden">
          Painel do parceiro &copy; Padarina Donna Adriana -{' '}
          {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}
