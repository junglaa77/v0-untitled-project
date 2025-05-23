import type React from "react"
import { BellIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

interface DashboardHeaderProps {
  heading: string
  description?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, description, children }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2 pb-4">
      <div className="grid gap-1">
        <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
      {children}
    </div>
  )
}
