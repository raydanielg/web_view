import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function DeliveriesPage() {
  return (
    <Suspense>
      <ModulePage
        title="Delivery Register"
        endpoint="/api/deliveries"
        dataKey="deliveries"
        columns={[
          { key: "delivery_no", label: "Delivery No" },
          { key: "tracking_no", label: "Tracking No" },
          { key: "customer_name", label: "Customer" },
          { key: "zone", label: "Zone" },
          { key: "delivery_fee", label: "Fee", kind: "money" },
          { key: "driver_name", label: "Driver" },
          { key: "delivery_status", label: "Status", kind: "status" },
        ]}
      />
    </Suspense>
  )
}
