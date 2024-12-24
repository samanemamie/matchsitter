import { type PropsWithChildren } from 'react'

export default function layoutwitOutToolbar({ children }: PropsWithChildren) {
  return (
    <main>
      <div>(witOutToolBar)</div>
      {children}
    </main>
  )
}
