"use client"

import { useEffect, useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { ModuleTable } from "@/components/module-table"
import { apiGet } from "@/lib/api"
import { formatTzs } from "@/lib/status"
import { Badge } from "@workspace/ui/components/badge"
import { statusBadgeClass } from "@/lib/status"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Spinner } from "@workspace/ui/components/spinner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

interface Stats {
  statusMap: Record<string, number>
  totals: {
    shipments: number
    kg_dubai: number
    kg_tz: number
    boxes: { total: number; open: number; in_transit: number }
  }
  revenue: { collected: number; outstanding: number }
  recent: {
    tracking_no: string
    status: string
    item_type: string
    weight_kg: number
    shelf_position: string | null
    received_date_tz: string | null
    customer_name: string
  }[]
}

const CARDS: { key: string; label: string; hint?: string }[] = [
  { key: "Received Dubai", label: "Received Dubai" },
  { key: "Awaiting Consolidation", label: "Awaiting Consolidation" },
  { key: "Departed Dubai", label: "In Transit" },
  { key: "Arrived Tanzania", label: "Arrived TZ" },
  { key: "On Shelf", label: "On Shelf" },
  { key: "Ready for Collection", label: "Ready for Collection" },
  { key: "Out for Delivery", label: "Out for Delivery" },
  { key: "Old Stock", label: "Old Stock" },
]

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    apiGet<Stats>("/api/dashboard/stats")
      .then(setStats)
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Failed to load")
      )
  }, [])

  return (
    <DashboardShell title="Dashboard">
      {error && <p className="text-sm text-destructive">{error}</p>}
      {!stats && !error && (
        <div className="flex min-h-40 items-center justify-center">
          <Spinner className="size-6" />
        </div>
      )}
      {stats && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((c) => (
              <Card key={c.key}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {c.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold tabular-nums">
                    {stats.statusMap[c.key] ?? 0}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total KG (TZ)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tabular-nums">
                  {stats.totals.kg_tz.toLocaleString()}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Collected
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tabular-nums text-emerald-600">
                  {formatTzs(stats.revenue.collected)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Outstanding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tabular-nums text-red-600">
                  {formatTzs(stats.revenue.outstanding)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Boxes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tabular-nums">
                  {stats.totals.boxes.total}
                  <span className="ms-2 text-sm font-normal text-muted-foreground">
                    {stats.totals.boxes.open} open
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Shipments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tracking No</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>KG</TableHead>
                    <TableHead>Shelf</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.recent.map((r) => (
                    <TableRow key={r.tracking_no}>
                      <TableCell className="font-mono text-xs">
                        {r.tracking_no}
                      </TableCell>
                      <TableCell>{r.customer_name}</TableCell>
                      <TableCell>{r.item_type}</TableCell>
                      <TableCell className="tabular-nums">
                        {r.weight_kg}
                      </TableCell>
                      <TableCell>{r.shelf_position ?? "—"}</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={statusBadgeClass(r.status)}
                        >
                          {r.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      )}
    </DashboardShell>
  )
}
