import { CircleUser, FileText, MessageSquare, Package } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface RecentActivityProps {
  className?: string
}

export function RecentActivity({ className }: RecentActivityProps) {
  const activities = [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "created a new project",
      project: "Mobile App Redesign",
      time: "2 hours ago",
      icon: Package,
    },
    {
      id: 2,
      user: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "commented on",
      project: "Dashboard Updates",
      time: "5 hours ago",
      icon: MessageSquare,
    },
    {
      id: 3,
      user: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "uploaded a document",
      project: "Q2 Report",
      time: "1 day ago",
      icon: FileText,
    },
    {
      id: 4,
      user: {
        name: "Emily Chen",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "joined the team",
      project: "",
      time: "2 days ago",
      icon: CircleUser,
    },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>
                  {activity.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span> {activity.action}{" "}
                  {activity.project && <span className="font-semibold">{activity.project}</span>}
                </p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
              <div className="ml-auto">
                <activity.icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
