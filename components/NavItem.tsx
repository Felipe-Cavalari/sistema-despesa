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
      className={`${link === path ? 'bg-primary text-white' : ''} group flex items-center gap-3 rounded p-3 hover:bg-primary`}
    >
      <Icon
        className={`${link === path ? 'text-white' : ''} size-5 text-foreground group-hover:text-white`}
      />
      <span
        className={`${link === path ? 'text-white' : ''}  font-medium text-foreground group-hover:text-white `}
      >
        {title}
      </span>
    </Link>
  )
}
