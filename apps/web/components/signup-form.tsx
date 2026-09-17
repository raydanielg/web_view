"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "cn"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Spinner } from "@workspace/ui/components/spinner"
import { toast } from "@workspace/ui/components/toast"
import { apiPost, type AuthResponse } from "@/lib/api"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  LayoutBottomIcon,
  LockIcon,
  Mail01Icon,
  UnfoldMoreIcon,
  UserIcon,
  ViewIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isLoading) return
    setIsLoading(true)
    setError(null)
    const form = new FormData(event.currentTarget)
    try {
      const data = await apiPost<AuthResponse>("/api/auth/signup", {
        firstName: form.get("firstName"),
        lastName: form.get("lastName"),
        email: form.get("email"),
        phone: `${form.get("countryCode")}${form.get("phone")}`,
        password: form.get("password"),
      })
      toast.add({
        title: `Karibu, ${data.user.firstName}!`,
        description: "Account created successfully",
        type: "success",
      })
      router.push("/dashboard")
    } catch (err) {
      const message = err instanceof Error ? err.message : "Sign up failed"
      setError(message)
      toast.add({ title: "Sign up failed", description: message, type: "error" })
    } finally {
      setIsLoading(false)
    }
  }

  function handleGoogle() {
    if (isGoogleLoading) return
    setIsGoogleLoading(true)
    setTimeout(() => setIsGoogleLoading(false), 2000)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <HugeiconsIcon
                  icon={LayoutBottomIcon}
                  strokeWidth={2}
                  className="size-6"
                />
              </div>
              <span className="sr-only">Xerin Warehouse</span>
            </a>
            <h1 className="text-xl font-bold">Join Xerin Warehouse</h1>
            <FieldDescription>
              Already have an account? <a href="/login">Log in</a>
            </FieldDescription>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="first-name">First Name</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
                </InputGroupAddon>
                <InputGroupInput
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
                </InputGroupAddon>
                <InputGroupInput
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </InputGroup>
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
              </InputGroupAddon>
              <InputGroupInput
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
            <InputGroup>
              <InputGroupAddon className="self-stretch border-e border-input">
                <div className="relative flex items-center">
                  <select
                    aria-label="Country code"
                    name="countryCode"
                    defaultValue="+255"
                    className="cursor-pointer appearance-none bg-transparent pe-4 text-sm font-medium outline-none"
                  >
                    <option value="+255">🇹🇿 +255</option>
                    <option value="+254">🇰🇪 +254</option>
                    <option value="+256">🇺🇬 +256</option>
                    <option value="+250">🇷🇼 +250</option>
                    <option value="+257">🇧🇮 +257</option>
                    <option value="+251">🇪🇹 +251</option>
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+233">🇬🇭 +233</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                  <HugeiconsIcon
                    icon={UnfoldMoreIcon}
                    strokeWidth={2}
                    className="pointer-events-none absolute end-0 size-3.5 text-muted-foreground"
                  />
                </div>
              </InputGroupAddon>
              <InputGroupInput
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{9}"
                maxLength={9}
                placeholder="700 000 000"
                required
              />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <HugeiconsIcon icon={LockIcon} strokeWidth={2} />
              </InputGroupAddon>
              <InputGroupInput
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password (min 8 chars)"
                minLength={8}
                required
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  size="icon-xs"
                  variant="ghost"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  <HugeiconsIcon
                    icon={showPassword ? ViewOffIcon : ViewIcon}
                    strokeWidth={2}
                  />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          {error && (
            <FieldDescription className="text-destructive">
              {error}
            </FieldDescription>
          )}
          <Field>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner data-icon="inline-start" />
                  Creating account…
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </Field>
          <FieldSeparator>Or</FieldSeparator>
          <Field>
            <Button
              variant="outline"
              type="button"
              disabled={isGoogleLoading}
              onClick={handleGoogle}
            >
              {isGoogleLoading ? (
                <Spinner data-icon="inline-start" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a6.57 6.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                  fill="#4285F4"
                />
                <path
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.98 11.98 0 0 0 12 24z"
                  fill="#34A853"
                />
                <path
                  d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.29a11.98 11.98 0 0 0 0 10.76l3.98-3.09z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.95 11.95 0 0 0 12 0C7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
                  fill="#EA4335"
                />
                </svg>
              )}
              {isGoogleLoading ? "Continuing…" : "Continue with Google"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking, you agree to our <a href="/terms" className="underline underline-offset-2 hover:text-foreground">Terms</a> and <a href="/policy" className="underline underline-offset-2 hover:text-foreground">Policy</a>.
      </FieldDescription>
    </div>
  )
}
