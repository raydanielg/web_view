"use client"

import { useEffect, useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { apiGet } from "@/lib/api"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Spinner } from "@workspace/ui/components/spinner"

interface ConfigItem {
  id: number
  list_name: string
  item_key: string
  item_value: string
}

export default function ConfigPage() {
  const [config, setConfig] = useState<Record<string, ConfigItem[]>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    apiGet<{ config: Record<string, ConfigItem[]> }>("/api/admin/config")
      .then((d) => setConfig(d.config))
      .catch((e) => setError(e instanceof Error ? e.message : "Failed"))
      .finally(() => setLoading(false))
  }, [])

  return (
    <DashboardShell title="Configuration">
      {loading && (
        <div className="flex min-h-40 items-center justify-center">
          <Spinner className="size-6" />
        </div>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(config).map(([list, items]) => (
          <Card key={list}>
            <CardHeader>
              <CardTitle className="text-sm capitalize">
                {list.replace(/_/g, " ")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between gap-2 border-b border-border/50 pb-1 last:border-0"
                  >
                    <span>{item.item_key}</span>
                    {item.item_key !== item.item_value && (
                      <span className="text-muted-foreground tabular-nums">
                        {item.item_value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  )
}
