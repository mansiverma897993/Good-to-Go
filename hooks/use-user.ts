"use client"

import useSWR from "swr"
import type { User } from "@/lib/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useUser(userId: string) {
  const { data, error, isLoading } = useSWR<User>(userId ? `/api/user/${userId}` : null, fetcher)

  return {
    user: data || null,
    isLoading,
    isError: !!error,
  }
}

export function useUserBookmarks(userId: string) {
  const { data, error, isLoading } = useSWR<any[]>(userId ? `/api/bookmarks?user_id=${userId}` : null, fetcher)

  return {
    bookmarks: data || [],
    isLoading,
    isError: !!error,
  }
}

export function useUserContributions(userId: string) {
  const { data, error, isLoading } = useSWR<any[]>(userId ? `/api/contributions?user_id=${userId}` : null, fetcher)

  return {
    contributions: data || [],
    isLoading,
    isError: !!error,
  }
}
