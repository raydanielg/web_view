import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function InvoicesPage() {
  return (
    <Suspense>
      <ModulePage
        title="Invoices"
        endpoint="/api/finance/invoices"
        dataKey="invoices"
        columns={[
          { key: "invoice_no", label: "Invoice No" },
          { key: "tracking_no", label: "Tracking No" },
          { key: "customer_name", label: "Customer" },
          { key: "freight_charges", label: "Freight", kind: "money" },
          { key: "storage_charges", label: "Storage", kind: "money" },
          { key: "delivery_charges", label: "Delivery", kind: "money" },
          { key: "total_charges", label: "Total", kind: "money" },
          { key: "payment_status", label: "Payment", kind: "status" },
        ]}
      />
    </Suspense>
  )
}
