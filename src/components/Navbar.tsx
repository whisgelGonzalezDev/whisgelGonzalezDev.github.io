import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const SECTIONS = ['about', 'trajectory', 'skills', 'services', 'projects', 'contact'] as const

export function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const setLang = (lng: 'es' | 'en') => i18n.changeLanguage(lng)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-[var(--color-text-h)]">
          whisgel<span className="text-[var(--color-accent)]">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-[var(--color-muted)] md:flex">
          {SECTIONS.map((s) => (
            <li key={s}>
              <a href={`#${s}`} className="transition-colors hover:text-[var(--color-text-h)]">
                {t(`nav.${s}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LangSwitch current={i18n.language} onChange={setLang} />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-text-h)]"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm text-[var(--color-muted)]">
            {SECTIONS.map((s) => (
              <li key={s}>
                <a href={`#${s}`} onClick={() => setOpen(false)}>
                  {t(`nav.${s}`)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <LangSwitch current={i18n.language} onChange={setLang} />
            <button
              onClick={toggleTheme}
              className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-muted)]"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function LangSwitch({ current, onChange }: { current: string; onChange: (l: 'es' | 'en') => void }) {
  const lang = current.startsWith('en') ? 'en' : 'es'
  return (
    <div className="flex rounded-full border border-[var(--color-border)] p-0.5 text-xs font-medium">
      {(['es', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === l
              ? 'bg-[var(--color-accent)] text-white'
              : 'text-[var(--color-muted)] hover:text-[var(--color-text-h)]'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
