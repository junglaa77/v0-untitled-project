import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col">
        <AppSidebar />
        <SidebarInset>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="mx-auto w-full max-w-6xl">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
