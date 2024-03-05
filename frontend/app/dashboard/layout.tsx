import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="pl-0 lg:pl-24 flex h-full flex-1 flex-col lg:min-h-screen">
        {children}
      </div>
    </div>
  )
}
