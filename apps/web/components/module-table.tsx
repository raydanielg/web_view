"use client"

import { useEffect, useState } from "react"
import { apiGet } from "@/lib/api"
import { statusBadgeClass } from "@/lib/status"
import { Badge } from "@workspace/ui/components/badge"
import { Spinner } from "@workspace/ui/components/spinner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

export interface Column {
  key: string
  label: string
  kind?: "text" | "status" | "money" | "number"
}

export function ModuleTable({
  endpoint,
  dataKey,
  columns,
}: {
  endpoint: string
  dataKey: string
  columns: Column[]
}) {
  const [rows, setRows] = useState<Record<string, unknown>[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    apiGet<Record<string, unknown[]>>(endpoint)
      .then((data) => {
        if (!cancelled) setRows((data[dataKey] as Record<string, unknown>[]) ?? [])
      })
      .catch((err) => {
        if (!cancelled)
          setError(err instanceof Error ? err.message : "Failed to load")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [endpoint, dataKey])

  if (loading) {
    return (
      <div className="flex min-h-40 items-center justify-center">
        <Spinner className="size-6" />
      </div>
    )
  }
  if (error) {
    return <p className="text-sm text-destructive">{error}</p>
  }
  if (rows.length === 0) {
    return <p className="text-sm text-muted-foreground">No records yet.</p>
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((c) => (
              <TableHead key={c.key}>{c.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={String(row.id ?? i)}>
              {columns.map((c) => {
                const value = row[c.key]
                if (c.kind === "status") {
                  return (
                    <TableCell key={c.key}>
                      <Badge
                        variant="secondary"
                        className={statusBadgeClass(String(value ?? "—"))}
                      >
                        {String(value ?? "—")}
                      </Badge>
                    </TableCell>
                  )
                }
                if (c.kind === "money") {
                  const n = typeof value === "number" ? value : null
                  return (
                    <TableCell key={c.key} className="tabular-nums">
                      {n == null ? "—" : `TSh ${n.toLocaleString("en-TZ")}`}
                    </TableCell>
                  )
                }
                if (c.kind === "number") {
                  return (
                    <TableCell key={c.key} className="tabular-nums">
                      {value == null ? "—" : String(value)}
                    </TableCell>
                  )
                }
                return (
                  <TableCell key={c.key}>
                    {value == null || value === "" ? "—" : String(value)}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
