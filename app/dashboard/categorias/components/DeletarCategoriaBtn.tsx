'use client'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function DeletarCategoriaBtn(IdCategoria: string) {
  return (
    <div className="">
      <Button
        size={'xs'}
        onClick={() => {
          console.log(IdCategoria)
        }}
      >
        <X />
      </Button>
    </div>
  )
}
