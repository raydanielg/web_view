const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface AuthResponse {
  token: string
  user: User
}

async function parseResponse<T>(res: Response): Promise<T> {
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(
      typeof data.error === "string" ? data.error : "Request failed"
    )
  }
  return data as T
}

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, { credentials: "include" })
  return parseResponse<T>(res)
}

export async function apiPost<T>(path: string, body?: unknown): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  })
  return parseResponse<T>(res)
}
