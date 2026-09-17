import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function BoxesPage() {
  return (
    <Suspense>
      <ModulePage
        title="Consolidation Boxes"
        endpoint="/api/boxes"
        dataKey="boxes"
        columns={[
          { key: "box_number", label: "Box No" },
          { key: "date_packed", label: "Packed" },
          { key: "total_customers", label: "Customers", kind: "number" },
          { key: "total_kg", label: "KG", kind: "number" },
          { key: "current_location", label: "Location" },
          { key: "status", label: "Status", kind: "status" },
        ]}
      />
    </Suspense>
  )
}
