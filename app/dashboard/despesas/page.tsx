import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Coins, Receipt } from 'lucide-react'
import DespesasTable from './components/DespesasTable'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Tabs defaultValue="despesas" className="">
        <TabsList className="">
          <TabsTrigger value="despesas">
            <Coins /> Despesas
          </TabsTrigger>

          <TabsTrigger value="despesas_fixas">
            <Receipt /> Despesas Fixas
          </TabsTrigger>
        </TabsList>
        <TabsContent value="despesas" className="px-4 py-6">
          <DespesasTable />
        </TabsContent>
        <TabsContent value="despesas_fixas">Despesas fixas</TabsContent>
      </Tabs>
    </div>
  )
}
