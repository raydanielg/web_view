import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { HugeiconsIcon } from "@hugeicons/react"
import { WarehouseIcon } from "@hugeicons/core-free-icons"

export const metadata = {
  title: "Privacy Policy — Xerin Warehouse",
}

const sections = [
  {
    title: "1. Scope of This Policy",
    body: [
      "This Privacy Policy explains how Xerin Warehouse collects, uses, stores, and protects personal information processed through our logistics management system. It applies to staff users, customers, drivers, passengers carrying consolidated cargo, and suppliers referenced in shipment records.",
      "We process personal data in accordance with the Personal Data Protection Act, 2022 of the United Republic of Tanzania, and applicable UAE data protection requirements for cargo handled at our Dubai operations.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "Customer data: full name, phone number(s), email address, customer type, default delivery option, zone, and delivery address. These are required to register shipments, generate invoices, and complete deliveries.",
      "Shipment data: item descriptions, item types, weights, pieces, supplier names, photos of damaged cargo (where captured), and delivery receiver details including names and OTP confirmations.",
      "Staff data: names, email, phone, role assignments, and a complete activity history in the audit log — every record created, edited, approved, or deleted is attributed to the user who performed it.",
      "Technical data: authentication sessions (httpOnly cookies), IP addresses in server logs, and device/browser metadata necessary for security monitoring.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "Operations: receiving, consolidation, trip manifests, sorting, shelf placement, invoicing, payment approval, dispatch, and delivery — the entire cargo lifecycle depends on accurate customer and shipment records.",
      "Notifications: SMS/WhatsApp messages about shipment milestones — received in Dubai, departed, arrived in Tanzania, ready for collection, storage reminders, out for delivery, and delivery confirmation.",
      "Financial records: invoices, payment records, and approval trails retained for accounting, tax, and audit obligations.",
      "Security: audit logging, fraud prevention, and investigation of discrepancies (weight mismatches, missing pieces, damaged cargo claims).",
    ],
  },
  {
    title: "4. Legal Basis for Processing",
    body: [
      "Contract performance: processing is necessary to provide the logistics services you requested.",
      "Legal obligation: tax, customs, and financial record-keeping requirements in Tanzania and the UAE.",
      "Legitimate interest: security monitoring, audit trails, and service improvement.",
      "Consent: marketing or optional communications, where applicable, will only be sent with your consent and may be withdrawn at any time.",
    ],
  },
  {
    title: "5. Who Sees Your Data",
    body: [
      "Role-based access governs visibility: Dubai staff see receiving data; warehouse staff see shelf data; accountants see invoicing data; drivers see only the deliveries assigned to them; customers see only their own shipments.",
      "We do not sell personal data. We do not share customer lists with third parties for marketing.",
      "Data is shared only as needed for operations: airline/manifest data with passengers and carriers, delivery contact details with assigned drivers, and financial records with auditors or regulators where legally required.",
      "Where data crosses borders (Dubai ↔ Tanzania), it is transferred solely for cargo handling and is subject to the same confidentiality obligations in both jurisdictions.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "Passwords are stored only as salted scrypt hashes — plaintext passwords are never saved or retrievable.",
      "Sessions use httpOnly, SameSite cookies; tokens are short-lived and revocable. API traffic is encrypted in transit (TLS in production).",
      "Access is least-privilege by design: users can only reach the modules their role permits, and privileged actions (approvals, deletions, configuration) are logged with before/after values.",
      "Backups are performed daily and stored off the primary server. Access to production data is restricted to the Super Administrator and designated IT personnel.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "Shipment, invoice, and payment records: minimum seven (7) years, per accounting and tax requirements.",
      "Audit logs: retained for the life of the system, as they are the accountability record for all operations.",
      "Customer accounts: active while you use the service; blocked accounts retain their history (we suspend, never delete, to preserve audit integrity).",
      "Where a retention period expires, data is anonymized or securely deleted unless legal holds apply.",
    ],
  },
  {
    title: "8. Your Rights",
    body: [
      "Access: you may request a copy of the personal data we hold about you.",
      "Correction: notify Customer Service to correct inaccurate names, phone numbers, or addresses — correcting your record fixes it everywhere, since the system maintains a single source of truth.",
      "Objection and erasure: where legally applicable, you may object to processing or request deletion, subject to our mandatory retention obligations for financial and customs records.",
      "Complaints: you may lodge a complaint with us first, and with the relevant data protection authority if unresolved.",
    ],
  },
  {
    title: "9. Cookies",
    body: [
      "We use a single essential cookie — an httpOnly session token — to keep you logged in. It cannot be read by scripts and expires after seven days or on logout.",
      "We do not use advertising trackers, analytics cookies, or third-party tracking pixels on this system.",
    ],
  },
  {
    title: "10. Children",
    body: [
      "Our services are directed at adults conducting business. We do not knowingly collect data from children. Any account found to belong to a minor will be suspended and its data reviewed.",
    ],
  },
  {
    title: "11. Changes and Contact",
    body: [
      "We may update this Policy as the system evolves. Material changes will be announced to staff internally and to customers via SMS or email before they take effect.",
      "Privacy questions or requests: Customer Service desk, Xerin Warehouse, Dar es Salaam, Tanzania — or via your account manager.",
    ],
  },
]

export default function PolicyPage() {
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
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-foreground/70">
          Effective date: 17 September 2026 · Version 1.0
        </p>
        <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm text-foreground dark:border-orange-900 dark:bg-orange-950/40">
          <strong>Your data, one record.</strong> Customer information lives in
          exactly one place in this system — no duplicate sheets, no stale
          copies. What we collect is used for your cargo, and nothing else.
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
          <Link href="/terms" className="hover:text-foreground">
            Terms of Service →
          </Link>
        </footer>
      </div>
      </div>
    </div>
  )
}
