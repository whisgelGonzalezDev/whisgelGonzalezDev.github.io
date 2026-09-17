import { useTranslation } from 'react-i18next'
import { skillGroups, tools, LEVEL_LABEL, LEVEL_WIDTH } from '../data/skills'

export function Skills() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('skills.title')}
      </h2>

      <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category.es}>
            <h3 className="text-sm font-medium text-[var(--color-text-h)]">{group.category[lang]}</h3>
            <div className="mt-4 space-y-3">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="text-[var(--color-text)]">{skill.name}</span>
                    <span className="text-[var(--color-muted)]">{LEVEL_LABEL[skill.level][lang]}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-soft)]">
                    <div
                      className="h-full rounded-full bg-[var(--color-accent)]"
                      style={{ width: LEVEL_WIDTH[skill.level] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-[var(--color-border)] pt-8">
        <h3 className="text-sm font-medium text-[var(--color-text-h)]">
          {lang === 'es' ? 'Herramientas' : 'Tools'}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[var(--color-bg-soft)] px-3 py-1 text-xs text-[var(--color-muted)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
