import { BarChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface OverviewProps {
  className?: string
}

export function Overview({ className }: OverviewProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Overview</CardTitle>
          <CardDescription>Monthly revenue and user growth</CardDescription>
        </div>
        <Tabs defaultValue="revenue">
          <TabsList>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center text-muted-foreground">
          <BarChart className="h-8 w-8" />
          <span className="ml-2">Chart visualization goes here</span>
        </div>
      </CardContent>
    </Card>
  )
}
