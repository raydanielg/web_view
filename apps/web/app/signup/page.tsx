import { SignupForm } from "@/components/signup-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SignupPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-gradient-to-br from-emerald-100 via-emerald-50 to-background p-6 md:p-10 dark:from-emerald-950 dark:via-background dark:to-background">
      <ThemeToggle className="absolute top-4 end-4" />
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
