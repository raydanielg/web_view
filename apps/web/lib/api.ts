const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"

export interface AuthResponse {
  token: string
  user: {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
  }
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(
      typeof data.error === "string" ? data.error : "Request failed"
    )
  }
  return data as T
}
