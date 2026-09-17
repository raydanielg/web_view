import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function WarehousePage() {
  return (
    <Suspense>
      <ModulePage
        title="Warehouse TZ"
        endpoint="/api/shipments"
        dataKey="shipments"
        columns={[
          { key: "tracking_no", label: "Tracking No" },
          { key: "customer_name", label: "Customer" },
          { key: "shelf_position", label: "Shelf" },
          { key: "daysInCenter", label: "Days", kind: "number" },
          { key: "storageCharge", label: "Storage", kind: "money" },
          { key: "condition", label: "Condition" },
          { key: "status", label: "Status", kind: "status" },
        ]}
      />
    </Suspense>
  )
}
