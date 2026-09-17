import { useTranslation } from 'react-i18next'
import { Languages as LanguagesIcon } from 'lucide-react'
import { languages } from '../data/languages'
import { Section } from './Section'

export function Languages() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <Section maxWidth="max-w-3xl">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('languages.title')}
      </h2>

      <div className="mt-6 space-y-4">
        {languages.map((l) => (
          <div key={l.name.es}>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 font-medium text-[var(--color-text-h)]">
                <LanguagesIcon size={15} className="text-[var(--color-accent)]" />
                {l.name[lang]}
              </span>
              <span className="text-[var(--color-muted)]">{l.level[lang]}</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-soft)]">
              <div
                className="h-full rounded-full"
                style={{
                  width: l.width,
                  background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-2))',
                  boxShadow: '0 0 8px var(--color-accent)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
