import { useTranslation } from 'react-i18next'
import { skillGroups } from '../data/skills'

export function Skills() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('skills.title')}
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category.es}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <h3 className="text-sm font-medium text-[var(--color-text-h)]">{group.category[lang]}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[var(--color-bg-soft)] px-3 py-1 text-xs text-[var(--color-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
