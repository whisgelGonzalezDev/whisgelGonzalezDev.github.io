import { useEffect, useState } from 'react'
import { Home, Briefcase, SlidersHorizontal, FolderOpen, Mail } from 'lucide-react'

const ITEMS = [
  { id: 'top', icon: Home },
  { id: 'trajectory', icon: Briefcase },
  { id: 'skills', icon: SlidersHorizontal },
  { id: 'projects', icon: FolderOpen },
  { id: 'contact', icon: Mail },
]

export function FloatingNav() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed top-1/2 left-4 z-40 hidden -translate-y-1/2 flex-col gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-2 shadow-lg backdrop-blur-md md:flex"
      aria-label="Section navigation"
    >
      {ITEMS.map(({ id, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={id}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            active === id
              ? 'bg-[var(--color-accent)] text-white shadow-[0_0_16px_var(--color-accent)]'
              : 'text-[var(--color-muted)] hover:bg-[var(--color-bg-soft)]'
          }`}
        >
          <Icon size={17} />
        </a>
      ))}
    </nav>
  )
}
