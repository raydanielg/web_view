"use client"

import { useState } from "react"
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
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Spinner } from "@workspace/ui/components/spinner"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  LayoutBottomIcon,
  LockIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isLoading) return
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
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
                <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
            <FieldDescription>
              Don&apos;t have an account? <a href="/signup">Sign up</a>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
              </InputGroupAddon>
              <InputGroupInput
                id="email"
                type="email"
                placeholder="m@example.com"
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
                type="password"
                placeholder="Enter your password"
                required
              />
            </InputGroup>
          </Field>
          <Field>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner data-icon="inline-start" />
                  Logging in…
                </>
              ) : (
                "Login"
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
        By clicking, you agree to our <a href="#">Terms and Policy</a>.
      </FieldDescription>
    </div>
  )
}
