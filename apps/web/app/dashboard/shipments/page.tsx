import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function ShipmentsPage() {
  return (
    <Suspense>
      <ModulePage
        title="Shipments"
        endpoint="/api/shipments"
        dataKey="shipments"
        columns={[
          { key: "tracking_no", label: "Tracking No" },
          { key: "customer_name", label: "Customer" },
          { key: "item_type", label: "Type" },
          { key: "weight_kg", label: "KG", kind: "number" },
          { key: "received_location", label: "Location" },
          { key: "status", label: "Status", kind: "status" },
        ]}
      />
    </Suspense>
  )
}
