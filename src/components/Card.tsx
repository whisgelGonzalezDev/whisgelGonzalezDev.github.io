import type { ReactNode } from 'react'

export function Card({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`glow-card scroll-mt-24 p-6 md:p-8 ${className}`}>
      {children}
    </section>
  )
}
