import SelectComponent from '@/components/pages/dashboard/parentHome/SelectComponent'

export default function ParentHomePageComponent({ searchParams }: { searchParams: string }) {
  return (
    <div>
      <SelectComponent searchParams={searchParams!} />
    </div>
  )
}
