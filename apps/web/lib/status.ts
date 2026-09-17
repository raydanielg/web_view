// SOP color codes (R9): On Shelf=kijani, Out for Delivery=zambarau,
// Old Stock=nyekundu, Delivered/Collected/Closed=kijivu
const STATUS_STYLES: Record<string, string> = {
  "On Shelf": "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  "Out for Delivery": "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
  "Old Stock": "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
  "Delivered": "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "Collected": "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "Closed": "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "Ready for Collection": "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
  "Arrived Tanzania": "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300",
  "Departed Dubai": "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
  "Assigned to Box": "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300",
}

export function statusBadgeClass(status: string) {
  return (
    STATUS_STYLES[status] ??
    "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
  )
}

export function formatTzs(amount: number | null | undefined) {
  if (amount == null) return "—"
  return `TSh ${amount.toLocaleString("en-TZ")}`
}
