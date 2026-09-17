import type { ReactNode } from 'react'
import { Card } from './Card'

export function Section({
  id,
  maxWidth = 'max-w-2xl',
  children,
}: {
  id?: string
  maxWidth?: string
  children: ReactNode
}) {
  return (
    <div className={`mx-auto ${maxWidth} px-6 py-4`}>
      <Card id={id}>{children}</Card>
    </div>
  )
}
