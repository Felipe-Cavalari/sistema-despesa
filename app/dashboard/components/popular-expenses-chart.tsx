'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import colors from 'tailwindcss/colors'

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Tooltip,
} from 'recharts'

const data = [
  { product: 'Pão de queijo', expense: 1800 },
  { product: 'Farinha', expense: 400 },
  { product: 'Ovo', expense: 500 },
  { product: 'Picanha', expense: 100 },
  { product: 'Coca Cola', expense: 120 },
  { product: 'Atacadão', expense: 2500 },
]

export default function PopularProductsChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle>Produtos mais comprados</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={200}>
          <BarChart data={data} style={{ fontSize: 12 }}>
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey={'product'}
              dy={16}
            />
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
            <Tooltip />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Bar type="linear" dataKey="expense" fill={colors.orange['500']} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
