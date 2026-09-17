import { useTranslation } from 'react-i18next'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export function TopControls() {
  const { i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  const lang = i18n.language.startsWith('en') ? 'en' : 'es'
  const setLang = (lng: 'es' | 'en') => i18n.changeLanguage(lng)

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-1.5 shadow-lg backdrop-blur-md">
      <div className="flex rounded-full p-0.5 text-xs font-medium">
        {(['es', 'en'] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
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
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="rounded-full p-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-text-h)]"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  )
}
