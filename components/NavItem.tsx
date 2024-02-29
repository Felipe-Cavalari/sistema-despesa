import Link from 'next/link'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  link: string
  path: string
  icon: ElementType
}

export function NavItem({ title, link, path, icon: Icon }: NavItemProps) {
  return (
    <Link
      href={link}
      className={`${link === path ? 'bg-primary' : ''} group flex items-center gap-3 rounded p-3 hover:bg-primary`}
    >
      <Icon className={`size-5  group-hover:text-black`} />
      <span
        className={`hidden font-medium text-foreground ease-out group-hover:text-black group-hover:block group-hover:ease-in duration-700`}
      >
        {title}
      </span>
    </Link>
  )
}
