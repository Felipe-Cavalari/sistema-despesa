import { AtSign, KeyRound } from 'lucide-react'

export default function Login() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-orange-900">
        <h1>Imagem de fundo</h1>
      </div>
      <div className="bg-zinc-200 p-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-14 ">Login</h1>
        <form action="">
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="email">E-mail </label>
            <span className="relative">
              <AtSign className="absolute z-10 bottom-1 left-1  text-zinc-500 size-4 focus:bottom-2" />
              <input
                className="py-2 pl-8 border-b border-zinc-500 
                bg-zinc-100 focus:outline-none focus:border-zinc-950 focus:border-b-2"
                type="email"
                id="email"
              />{' '}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail </label>
            <span className="relative">
              <KeyRound className="absolute z-10 top-3 left-2 text-black size-4" />
              <input
                className="py-2 pl-8 border border-black rounded-lg"
                type="email"
                id="email"
              />{' '}
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
