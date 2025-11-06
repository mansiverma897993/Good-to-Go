import useSWR from "swr"
import type { Issue } from "@/lib/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useIssues(query?: string, difficulty?: string, label?: string) {
  let url = "/api/issues"
  const params = new URLSearchParams()

  if (query) params.append("q", query)
  if (difficulty) params.append("difficulty", difficulty)
  if (label) params.append("label", label)

  if (params.toString()) {
    url += `?${params.toString()}`
  }

  const { data, error, isLoading } = useSWR<Issue[]>(url, fetcher)

  return {
    issues: data || [],
    isLoading,
    isError: !!error,
  }
}
