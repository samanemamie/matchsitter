import { type PropsWithChildren } from 'react'

type DashboardLayoutProps = PropsWithChildren

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="mx-auto flex min-h-dvh max-w-[1920px] flex-col gap-6 p-4 md:p-6">
      <main className="flex-1 rounded-250 bg-gray-100 p-6">{children}</main>
    </div>
  )
}

export default DashboardLayout
