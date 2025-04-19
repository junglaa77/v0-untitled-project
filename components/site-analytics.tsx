import { PieChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SiteAnalyticsProps {
  className?: string
}

export function SiteAnalytics({ className }: SiteAnalyticsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Traffic Sources</CardTitle>
        <CardDescription>Where your visitors are coming from</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center text-muted-foreground">
          <PieChart className="h-8 w-8" />
          <span className="ml-2">Chart visualization goes here</span>
        </div>
      </CardContent>
    </Card>
  )
}
