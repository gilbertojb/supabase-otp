import { Card } from "@/components/ui/card"

export default async function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-semibold tracking-tight">Dashboard</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <Card className="h-36"></Card>
        </div>
        <div className="col-span-1">
          <Card className="h-36"></Card>
        </div>
        <div className="col-span-1">
          <Card className="h-36"></Card>
        </div>
      </div>

      <Card className="h-[calc(100vh-50rem)]"></Card>
    </div>
  )
}