import { Suspense } from "react"
import { ModulePage } from "@/components/module-page"

export default function TripsPage() {
  return (
    <Suspense>
      <ModulePage
        title="Trip Manifest"
        endpoint="/api/trips"
        dataKey="trips"
        columns={[
          { key: "trip_no", label: "Trip No" },
          { key: "passenger_name", label: "Passenger" },
          { key: "airline", label: "Airline" },
          { key: "flight_no", label: "Flight" },
          { key: "flight_date", label: "Flight Date" },
          { key: "total_boxes", label: "Boxes", kind: "number" },
          { key: "status", label: "Status", kind: "status" },
        ]}
      />
    </Suspense>
  )
}
