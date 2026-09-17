"use client"

import { useSearchParams } from "next/navigation"
import { DashboardShell } from "@/components/dashboard-shell"
import { ModuleTable, type Column } from "@/components/module-table"

export function ModulePage({
  title,
  endpoint,
  dataKey,
  columns,
}: {
  title: string
  endpoint: string
  dataKey: string
  columns: Column[]
}) {
  const params = useSearchParams()
  const status = params.get("status")
  const url = status
    ? `${endpoint}${endpoint.includes("?") ? "&" : "?"}status=${encodeURIComponent(status)}`
    : endpoint

  return (
    <DashboardShell title={status ? `${title} — ${status}` : title}>
      <ModuleTable endpoint={url} dataKey={dataKey} columns={columns} />
    </DashboardShell>
  )
}
