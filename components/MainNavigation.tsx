'use client'
import {
  BarChart,
  DollarSign,
  ShoppingCart,
  PersonStanding,
  FolderClosed,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'

export default function MainNavigation() {
  const pathname = usePathname()
  return (
    <nav className="space-y-3 w-12 group-hover:w-56 animation duration-300 ">
      <NavItem
        link={'/dashboard'}
        title="Dashboard"
        icon={BarChart}
        path={pathname}
      />
      <NavItem
        link={'/dashboard/despesas'}
        title="Despesas"
        icon={DollarSign}
        path={pathname}
      />
      <NavItem
        link={'/dashboard/fornecedores'}
        title="Fornecedores"
        icon={PersonStanding}
        path={pathname}
      />
      <NavItem
        link={'/dashboard/produtos'}
        title="Produtos"
        icon={ShoppingCart}
        path={pathname}
      />
      <NavItem
        link={'/dashboard/categorias'}
        title="Categorias"
        icon={FolderClosed}
        path={pathname}
      />
    </nav>
  )
}
