import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid grid-cols-app min-h-screen bg-background">
      <Sidebar />
      <div className="">{children}</div>
    </div>
  )
}
