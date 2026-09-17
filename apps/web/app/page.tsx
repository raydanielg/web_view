import { LoginForm } from "@/components/login-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-gradient-to-br from-orange-100 via-orange-50 to-background p-6 md:p-10 dark:from-orange-950 dark:via-background dark:to-background">
      <ThemeToggle className="absolute top-4 end-4" />
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
