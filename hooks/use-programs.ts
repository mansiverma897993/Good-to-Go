import useSWR from "swr"
import type { Program } from "@/lib/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function usePrograms() {
  const { data, error, isLoading } = useSWR<Program[]>("/api/programs", fetcher)

  return {
    programs: data || [],
    isLoading,
    isError: !!error,
  }
}
