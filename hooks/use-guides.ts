import useSWR from "swr"
import type { Guide } from "@/lib/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useGuides(category?: string) {
  let url = "/api/guides"
  if (category) {
    url += `?category=${category}`
  }

  const { data, error, isLoading } = useSWR<Guide[]>(url, fetcher)

  return {
    guides: data || [],
    isLoading,
    isError: !!error,
  }
}
