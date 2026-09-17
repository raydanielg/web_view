import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function CustomersPage() {
  return (
    <Suspense>
      <ModulePage
        title="Customers"
        endpoint="/api/customers"
        dataKey="customers"
        columns={[
          { key: "code", label: "Code" },
          { key: "full_name", label: "Name" },
          { key: "phone", label: "Phone" },
          { key: "customer_type", label: "Type" },
          { key: "default_option", label: "Option" },
          { key: "status", label: "Status", kind: "status" },
        ]}
      />
    </Suspense>
  )
}
