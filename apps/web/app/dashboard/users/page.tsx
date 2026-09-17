import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function UsersPage() {
  return (
    <Suspense>
      <ModulePage
        title="Users & Roles"
        endpoint="/api/admin/users"
        dataKey="users"
        columns={[
          { key: "first_name", label: "First Name" },
          { key: "last_name", label: "Last Name" },
          { key: "email", label: "Email" },
          { key: "roles", label: "Roles" },
          { key: "status", label: "Status", kind: "status" },
        ]}
      />
    </Suspense>
  )
}
