import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function AuditPage() {
  return (
    <Suspense>
      <ModulePage
        title="Audit Log"
        endpoint="/api/admin/audit"
        dataKey="audit"
        columns={[
          { key: "created_at", label: "When" },
          { key: "user_name", label: "Who" },
          { key: "action", label: "Action" },
          { key: "entity", label: "Entity" },
          { key: "entity_id", label: "Entity ID" },
        ]}
      />
    </Suspense>
  )
}
