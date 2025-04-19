import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Overview } from "@/components/overview"
import { RecentActivity } from "@/components/recent-activity"
import { SiteAnalytics } from "@/components/site-analytics"
import { StatsCards } from "@/components/stats-cards"
import { TeamMembers } from "@/components/team-members"

export function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" description="Overview of your project statistics and activity." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCards />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Overview className="lg:col-span-4" />
        <SiteAnalytics className="lg:col-span-3" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RecentActivity className="lg:col-span-4" />
        <TeamMembers className="lg:col-span-3" />
      </div>
    </DashboardShell>
  )
}
