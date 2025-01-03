import ParentHomePageComponent from '@/components/pages/dashboard/parentHome/ParentHomePageComponent'

interface Props {
  searchParams: Promise<{ babysitters_state?: string }>
}

export default async function ParentHomePage({ searchParams }: Props) {
  const currSearchParams = await searchParams

  return (
    <div className="px-4">
      <ParentHomePageComponent searchParams={currSearchParams.babysitters_state!} />
    </div>
  )
}
