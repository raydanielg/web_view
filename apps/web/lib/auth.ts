"use client"

import { useEffect, useState } from "react"
import { apiGet, apiPost, type User } from "@/lib/api"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    apiGet<{ user: User }>("/api/auth/me")
      .then((data) => {
        if (!cancelled) setUser(data.user)
      })
      .catch(() => {
        if (!cancelled) setUser(null)
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  async function logout() {
    try {
      await apiPost("/api/auth/logout")
    } finally {
      setUser(null)
    }
  }

  return { user, isLoading, logout }
}
