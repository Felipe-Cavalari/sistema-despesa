'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import colors from 'tailwindcss/colors'

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from 'recharts'

const data = [
  { date: '10/01', expense: 1800 },
  { date: '11/01', expense: 400 },
  { date: '12/01', expense: 500 },
  { date: '13/01', expense: 100 },
  { date: '14/01', expense: 120 },
  { date: '15/01', expense: 2500 },
  { date: '16/01', expense: 800 },
]

export default function MonthExpensesChart() {
  return (
    <Card className="col-span-5">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle>Despesas no Período</CardTitle>
          <CardDescription>Receita Mensal no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={200}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              width={100}
              stroke="black"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="expense"
              stroke={colors.orange['500']}
            />
            <XAxis axisLine={false} tickLine={false} dataKey={'date'} dy={16} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
