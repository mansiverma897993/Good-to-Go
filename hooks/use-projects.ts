import useSWR from "swr"
import type { Project } from "@/lib/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useProjects(query?: string, category?: string, program?: string) {
  let url = "/api/projects"
  const params = new URLSearchParams()

  if (query) params.append("q", query)
  if (category) params.append("category", category)
  if (program) params.append("program", program)

  if (params.toString()) {
    url += `?${params.toString()}`
  }

  const { data, error, isLoading } = useSWR<Project[]>(url, fetcher)

  return {
    projects: data || [],
    isLoading,
    isError: !!error,
  }
}
