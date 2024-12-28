import SelectComponent from '@/components/pages/dashboard/parentHome/SelectComponent'

export default function ParentHomePageComponent({ searchParams }: { searchParams: string }) {
  return (
    <div className="px-4">
      <SelectComponent searchParams={searchParams!} />
    </div>
  )
}
