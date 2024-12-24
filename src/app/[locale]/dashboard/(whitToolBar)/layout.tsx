import { type PropsWithChildren } from 'react'

export default function layoutwitToolbar({ children }: PropsWithChildren) {
  return (
    <main>
      <div>(whitToolBar)</div>
      {children}
    </main>
  )
}
