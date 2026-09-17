import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { HugeiconsIcon } from "@hugeicons/react"
import { WarehouseIcon } from "@hugeicons/core-free-icons"

export const metadata = {
  title: "Terms of Service — Xerin Warehouse",
}

const sections = [
  {
    title: "1. Authorized Access Only",
    body: [
      "Xerin Warehouse is a private, role-based logistics management system operated for the exclusive use of authorized Xerin staff, contractors, and registered customers. Access is granted only through credentials issued by a Super Administrator or Operations Manager.",
      "If you do not hold an authorized account, you are not permitted to use, probe, test, scan, or attempt to access this system in any way. There is no public registration for staff roles — all staff accounts are created and assigned internally.",
      "Every action performed on this platform — every login, every status change, every approval, every edit — is recorded in an immutable audit log that identifies who did what, and when. Unauthorized access attempts are logged, flagged, and may be reported to law enforcement under applicable computer misuse and cybersecurity laws of the United Republic of Tanzania and the United Arab Emirates.",
    ],
  },
  {
    title: "2. Account Responsibilities",
    body: [
      "You are responsible for maintaining the confidentiality of your credentials. Do not share your password with anyone, including colleagues. If you suspect your account has been compromised, notify your Operations Manager immediately so the account can be suspended.",
      "Accounts are personal and non-transferable. Actions taken under your account are attributed to you. Staff found sharing credentials or allowing others to act under their login will face disciplinary action, up to and including termination and legal review.",
      "Dormant accounts may be suspended after 90 days of inactivity. Suspended accounts cannot log in but remain in the system for audit history.",
    ],
  },
  {
    title: "3. Role-Based Permissions",
    body: [
      "Access to modules is governed by your assigned role(s): view, receive, operate, or manage. Attempting to perform actions outside your role — such as a warehouse officer attempting to approve payments — will be denied and logged.",
      "Elevated roles (Super Admin, Operations Manager, Finance Approver) are assigned only by management. Any attempt to escalate your own privileges is a serious violation of these Terms.",
      "Segregation of duties is enforced by design: the person who prepares an invoice cannot approve it; goods cannot leave the warehouse without an Approved status; sensitive edits are attributed and auditable.",
    ],
  },
  {
    title: "4. Cargo Handling Terms",
    body: [
      "Xerin provides consolidation, air freight (via passenger baggage), receiving, warehousing, and delivery services for cargo shipped from Dubai, UAE to Dar es Salaam, Tanzania. By submitting cargo, the customer warrants that items are lawful, accurately described, and properly declared.",
      "Prohibited items — including but not limited to weapons, narcotics, counterfeit goods, and items restricted by Tanzanian or UAE law — will be seized, reported to authorities, and the associated customer account will be blocked.",
      "All cargo is weighed and recorded. Weight discrepancies greater than 0.5 KG between Dubai and Tanzania records are flagged for investigation. Condition grades (GOOD, DAMAGED, INCOMPLETE, SUSPICIOUS) are assigned at receiving and form the basis of any claim.",
    ],
  },
  {
    title: "5. Storage and Charges",
    body: [
      "The first three (3) days of storage in our Tanzania warehouse are free of charge, counted from the date the shipment is received and recorded.",
      "From the fourth day, storage is charged at the configured daily rate (currently TSh 2,000 per day) until the shipment is released or collected. Storage charges accrue automatically and are visible on your invoice at all times.",
      "Shipments held beyond thirty (30) days are flagged as Old Stock. Xerin reserves the right to dispose of, auction, or otherwise handle unclaimed cargo after ninety (90) days, following written notice to the customer.",
      "Delivery fees are charged per the configured zone schedule (Collect at Tazara: free; Uhuru Heights and Zones A–C: per current rate card; Special Quote: as agreed in writing).",
    ],
  },
  {
    title: "6. Payment and Release",
    body: [
      "No shipment will be released from the warehouse unless the associated invoice has been marked Paid and the payment has been Approved by a Finance Approver. This rule is enforced by the system and cannot be overridden by staff.",
      "Accepted payment methods: NMB, CRDB, M-Pesa, Tigo Pesa, Airtel Money, and Cash. Cash payments must be receipted by the accountant on duty.",
      "Disputed charges must be raised in writing within seven (7) days of invoice issuance. Undisputed unpaid balances may result in the customer account being blocked and cargo being held.",
    ],
  },
  {
    title: "7. Delivery and Handover",
    body: [
      "Delivered cargo must be acknowledged by the receiver via the one-time password (OTP) sent by SMS to the registered customer phone, or by digital signature on the driver's device. A delivery without OTP or signature is not complete.",
      "Failed deliveries are logged with reason. Returned cargo resumes accruing storage charges from the date of return. Repeated failed deliveries (3+) may require the customer to collect in person.",
      "For collections, the registered customer or a pre-authorized representative (with matching ID and phone verification) must present identification. No exceptions.",
    ],
  },
  {
    title: "8. Acceptable Use",
    body: [
      "You agree not to: attempt to access accounts, data, or modules outside your authorization; introduce malware or attempt to disrupt the service; extract data in bulk by scraping or automated means; misrepresent cargo contents or customer identity; or use the system for any unlawful purpose.",
      "Violations result in immediate suspension, investigation, and — where warranted — civil or criminal referral. Our audit log provides the evidence trail.",
    ],
  },
  {
    title: "9. Liability",
    body: [
      "Xerin's liability for loss or damage to cargo is limited to the declared value of the shipment or the standard compensation rate per kilogram, whichever is lower, as per the rate card in force at the time of the claim.",
      "Xerin is not liable for delays caused by airline scheduling, customs holds, weather, or other force majeure events. Storage charges continue to accrue during customer-caused delays.",
      "Claims for damaged or incomplete cargo must be filed within 48 hours of delivery/collection, supported by the condition grade recorded at receiving and photographic evidence where available.",
    ],
  },
  {
    title: "10. System Availability and Data",
    body: [
      "We target high availability but do not guarantee uninterrupted service. Scheduled maintenance will be announced in advance where possible.",
      "Operational data — shipments, invoices, approvals, deliveries — is retained for a minimum of seven (7) years for accounting, tax, and audit purposes. The system is backed up daily; backups are stored off the primary server.",
      "In the event of data discrepancies, the system record — not paper records — is the authoritative source of truth, consistent with our single-source-of-truth design principle.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Material changes will be communicated to staff via internal notice and to customers via SMS or email. Continued use of the system after the effective date constitutes acceptance.",
      "These Terms are governed by the laws of the United Republic of Tanzania. Disputes shall be resolved in the courts of Dar es Salaam.",
    ],
  },
  {
    title: "12. Contact",
    body: [
      "Questions about these Terms: Operations Manager, Xerin Warehouse, Dar es Salaam, Tanzania.",
      "Security incidents or suspected unauthorized access: report immediately to the Super Administrator.",
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="relative min-h-svh bg-gradient-to-br from-orange-100 via-orange-50 to-background dark:from-orange-950">
      <div className="absolute top-4 left-4">
        <ThemeToggle />
      </div>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-2xl border bg-background/70 p-6 shadow-sm backdrop-blur sm:p-10">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium"
        >
          <HugeiconsIcon icon={WarehouseIcon} strokeWidth={2} className="size-5" />
          Xerin Warehouse
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-foreground/70">
          Effective date: 17 September 2026 · Version 1.0
        </p>
        <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm text-foreground dark:border-orange-900 dark:bg-orange-950/40">
          <strong>Authorized users only.</strong> This system is monitored.
          All activity is logged in an audit trail. If you are not authorized
          to be here, close this page now — access attempts are recorded.
        </div>
        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-6 text-foreground/75">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <footer className="mt-16 flex gap-6 border-t pt-6 text-sm text-foreground/70">
          <Link href="/" className="hover:text-foreground">
            ← Back to login
          </Link>
          <Link href="/policy" className="hover:text-foreground">
            Privacy Policy →
          </Link>
        </footer>
      </div>
      </div>
    </div>
  )
}
