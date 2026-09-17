import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function ApprovalsPage() {
  return (
    <Suspense>
      <ModulePage
        title="Payment Approvals"
        endpoint="/api/finance/approvals"
        dataKey="approvals"
        columns={[
          { key: "invoice_no", label: "Invoice No" },
          { key: "tracking_no", label: "Tracking No" },
          { key: "customer_name", label: "Customer" },
          { key: "total_charges", label: "Total", kind: "money" },
          { key: "payment_status", label: "Payment", kind: "status" },
          { key: "approval_status", label: "Approval", kind: "status" },
        ]}
      />
    </Suspense>
  )
}
