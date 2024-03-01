import Image from 'next/image'
import { Poppins } from 'next/font/google'

import MainNavigation from './MainNavigation'

const poppins = Poppins({ subsets: ['latin'], weight: '500' })

export default function Sidebar() {
  return (
    <div className="hidden lg:block fixed h-full left-0 z-[41] bg-white/80 backdrop-blur-md border-r border-gray-100 border-subtle w-24 hover:w-64 hover:ease-in hover:duration-150 ease-out duration-100 group">
      <aside className="border-r border-r-border px-5 py-8 space-y-6">
        <div className="flex items-center mb-10">
          <Image
            src={'/LogoDonnaAdriana.png'}
            width={50}
            height={50}
            alt="Logo padaria"
            priority
          />

          <span
            className={`${poppins.className} text-sm font-bold opacity-0 text-foreground group-hover:block group-hover:opacity-100 group-hover:ease-in group-hover:delay-100 group-hover:duration-300 ease-out duration-0`}
          >
            Sistema de Despesas
          </span>
        </div>

        <MainNavigation />
      </aside>
    </div>
  )
}
