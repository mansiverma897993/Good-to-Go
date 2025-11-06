import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useProjectsBySkills(skills: string[]) {
  const skillsQuery = skills.join(",")
  const { data, error, isLoading } = useSWR(skills.length > 0 ? `/api/projects?skills=${skillsQuery}` : null, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  })

  return {
    projects: data || [],
    isLoading,
    error,
  }
}
