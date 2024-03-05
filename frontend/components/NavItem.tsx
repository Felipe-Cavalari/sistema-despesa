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
      className={`${link === path ? 'bg-primary' : ''} group/item flex items-center gap-3 rounded p-3 hover:bg-primary`}
    >
      <div className="flex gap-3 ">
        <Icon
          className={`${link === path ? 'text-white' : ''} size-5  group-hover/item:text-white`}
        />
        <span
          className={`${link === path ? 'text-white' : ''} font-medium opacity-0 text-foreground group-hover:block group-hover:opacity-100 group-hover:ease-in group-hover:duration-300 ease-out duration-100`}
        >
          <span className="group-hover/item:text-white">{title} </span>
        </span>
      </div>
    </Link>
  )
}
