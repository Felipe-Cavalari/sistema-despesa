import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-muted gap-4">
      <h1 className="text-2xl">Página não encontrada</h1>
      <Link href={'/dashboard'}>
        <Button className="px-16 py-6">Dashboard</Button>
      </Link>
    </div>
  )
}
