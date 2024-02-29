import Image from 'next/image'

import MainNavigation from './MainNavigation'

export default function Sidebar() {
  return (
    <div className="hidden lg:block fixed h-full left-0 z-[41] bg-white/80 backdrop-blur-md border-r border-gray-100 border-subtle w-24 hover:w-64 animation duration-300 group">
      <aside className="border-r border-r-border px-5 py-8 space-y-6">
        <div className="flex items-center mb-10">
          <Image
            src={'/LogoDonnaAdriana.png'}
            width={50}
            height={50}
            alt="Logo padaria"
            priority
          />

          <strong className="text-sm ml-1 opacity-0 animate duration-300 group-hover:opacity-100">
            Sistema de Despesas
          </strong>
        </div>

        <MainNavigation />
      </aside>
    </div>
  )
}
