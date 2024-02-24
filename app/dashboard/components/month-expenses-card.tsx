import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export default function MonthExpensesCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="font-semibold text-base">
          Despesa Total (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1850,90</span>
        <p>
          {' '}
          <span className="text-emerald-500">-4%</span> em relação ao mês
          passado
        </p>
      </CardContent>
    </Card>
  )
}
