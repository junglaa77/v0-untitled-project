import { MoreHorizontal } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TeamMembersProps {
  className?: string
}

export function TeamMembers({ className }: TeamMembersProps) {
  const members = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Product Manager",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "active",
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "offline",
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "Backend Developer",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "active",
    },
  ]

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members</CardDescription>
        </div>
        <Button size="sm">Add Member</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {members.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${member.status === "active" ? "bg-emerald-500" : "bg-gray-300"}`}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View profile</DropdownMenuItem>
                    <DropdownMenuItem>Send message</DropdownMenuItem>
                    <DropdownMenuItem>Edit permissions</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
