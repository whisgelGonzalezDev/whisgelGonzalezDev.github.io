import { useTranslation } from 'react-i18next'
import { collaborations } from '../data/collaborations'

export function Collaborations() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <section id="collaborations" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('collaborations.title')}
      </h2>
      <p className="mt-2 text-[var(--color-muted)]">{t('collaborations.subtitle')}</p>

      <div className="mt-8 divide-y divide-[var(--color-border)] rounded-2xl border border-[var(--color-border)]">
        {collaborations.map((c) => (
          <div key={c.name} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="w-40 shrink-0 font-medium text-[var(--color-text-h)]">{c.name}</span>
            <div>
              <span className="text-xs font-semibold tracking-wide text-[var(--color-accent)] uppercase">
                {c.role[lang]}
              </span>
              <p className="mt-0.5 text-sm text-[var(--color-muted)]">{c.note[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
