import { Activity, BarChart3, Compass, FileText, LayoutDashboard, Settings, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <div className="flex h-full items-center gap-2 px-4">
          <div className="relative h-8 w-8">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Tako Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Tako Dashboard</span>
            <span className="text-xs text-muted-foreground">v1.0.0</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive>
              <Link href="/">
                <LayoutDashboard />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="#">
                <Activity />
                <span>Analytics</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="#">
                <BarChart3 />
                <span>Reports</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="#">
                <Users />
                <span>Team</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="#">
                <FileText />
                <span>Documents</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="#">
                <Compass />
                <span>Explore</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="#">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: "Alex Johnson",
            email: "alex@example.com",
            avatar: "/placeholder.svg?height=32&width=32",
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
