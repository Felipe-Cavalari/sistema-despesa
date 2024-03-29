import MonthExpensesCard from './components/month-expenses-card'
import MonthExpensesChart from './components/month-expenses-chart'
import PopularProductsChart from './components/popular-expenses-chart'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 min-h-screen px-4 py-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthExpensesCard />
        <MonthExpensesCard />
        <MonthExpensesCard />
        <MonthExpensesCard />
      </div>

      <div className="grid grid-cols-9 space-x-2">
        <MonthExpensesChart />
        <PopularProductsChart />
      </div>
    </div>
  )
}
