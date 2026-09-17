"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  DashboardSquare01Icon,
  PackageIcon,
  PackageOpenIcon,
  AirplaneTakeOff01Icon,
  AirplaneLanding01Icon,
  WarehouseIcon,
  TruckIcon,
  Invoice01Icon,
  CheckmarkBadge01Icon,
  UserMultiple02Icon,
  Settings05Icon,
  SecurityCheckIcon,
  BoxIcon,
} from "@hugeicons/core-free-icons"

const data = {
  user: {
    name: "Xerin Staff",
    email: "staff@xerin.co",
    avatar: "",
  },
  teams: [
    {
      name: "Xerin Warehouse",
      logo: <HugeiconsIcon icon={WarehouseIcon} strokeWidth={2} />,
      plan: "Dubai → Tanzania",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />,
      isActive: true,
      items: [{ title: "Overview", url: "/dashboard" }],
    },
    {
      title: "Dubai Receiving",
      url: "/dashboard/shipments",
      icon: <HugeiconsIcon icon={PackageIcon} strokeWidth={2} />,
      items: [
        { title: "All Shipments", url: "/dashboard/shipments" },
        { title: "Awaiting Consolidation", url: "/dashboard/shipments?status=Awaiting%20Consolidation" },
      ],
    },
    {
      title: "Consolidation",
      url: "/dashboard/boxes",
      icon: <HugeiconsIcon icon={PackageOpenIcon} strokeWidth={2} />,
      items: [
        { title: "Boxes", url: "/dashboard/boxes" },
        { title: "Open Boxes", url: "/dashboard/boxes?status=Open" },
      ],
    },
    {
      title: "Trips",
      url: "/dashboard/trips",
      icon: <HugeiconsIcon icon={AirplaneTakeOff01Icon} strokeWidth={2} />,
      items: [{ title: "Trip Manifest", url: "/dashboard/trips" }],
    },
    {
      title: "Warehouse TZ",
      url: "/dashboard/warehouse",
      icon: <HugeiconsIcon icon={WarehouseIcon} strokeWidth={2} />,
      items: [
        { title: "On Shelf", url: "/dashboard/warehouse" },
        { title: "Ready for Collection", url: "/dashboard/warehouse?status=Ready%20for%20Collection" },
        { title: "Old Stock", url: "/dashboard/warehouse?status=Old%20Stock" },
      ],
    },
    {
      title: "Deliveries",
      url: "/dashboard/deliveries",
      icon: <HugeiconsIcon icon={TruckIcon} strokeWidth={2} />,
      items: [
        { title: "Delivery Register", url: "/dashboard/deliveries" },
        { title: "Out for Delivery", url: "/dashboard/deliveries?status=Out%20for%20Delivery" },
      ],
    },
    {
      title: "Finance",
      url: "/dashboard/invoices",
      icon: <HugeiconsIcon icon={Invoice01Icon} strokeWidth={2} />,
      items: [
        { title: "Invoices", url: "/dashboard/invoices" },
        { title: "Payment Approvals", url: "/dashboard/approvals" },
      ],
    },
    {
      title: "Customers",
      url: "/dashboard/customers",
      icon: <HugeiconsIcon icon={UserMultiple02Icon} strokeWidth={2} />,
      items: [{ title: "All Customers", url: "/dashboard/customers" }],
    },
    {
      title: "Administration",
      url: "/dashboard/users",
      icon: <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} />,
      items: [
        { title: "Users & Roles", url: "/dashboard/users" },
        { title: "Configuration", url: "/dashboard/config" },
        { title: "Audit Log", url: "/dashboard/audit" },
      ],
    },
  ],
  projects: [
    {
      name: "Dubai Pipeline",
      url: "/dashboard/shipments?status=Departed%20Dubai",
      icon: <HugeiconsIcon icon={AirplaneTakeOff01Icon} strokeWidth={2} />,
    },
    {
      name: "TZ Arrivals",
      url: "/dashboard/shipments?status=Arrived%20Tanzania",
      icon: <HugeiconsIcon icon={AirplaneLanding01Icon} strokeWidth={2} />,
    },
    {
      name: "Approvals Queue",
      url: "/dashboard/approvals",
      icon: <HugeiconsIcon icon={CheckmarkBadge01Icon} strokeWidth={2} />,
    },
    {
      name: "Audit Trail",
      url: "/dashboard/audit",
      icon: <HugeiconsIcon icon={SecurityCheckIcon} strokeWidth={2} />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
