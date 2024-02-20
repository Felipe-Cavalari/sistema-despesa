import Image from 'next/image'

import MainNavigation from './MainNavigation'

export default function Sidebar() {
  return (
    <aside className="border-r border-r-border px-5 py-8 space-y-6">
      <div className="flex items-center mb-10">
        <Image
          src={'/LogoDonnaAdriana.png'}
          width={100}
          height={100}
          alt="Logo padaria"
          priority
        />
        <strong>Sistema de Despesas</strong>
      </div>

      <MainNavigation />
    </aside>
  )
}
