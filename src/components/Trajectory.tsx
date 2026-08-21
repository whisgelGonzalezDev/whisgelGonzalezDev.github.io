import { useTranslation } from 'react-i18next'
import { experience } from '../data/experience'

export function Trajectory() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <section id="trajectory" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('trajectory.title')}
      </h2>
      <p className="mt-2 text-[var(--color-muted)]">{t('trajectory.subtitle')}</p>

      <ol className="mt-10 space-y-12 border-l border-[var(--color-border)] pl-8">
        {experience.map((entry) => (
          <li key={entry.company} className="relative">
            <span className="absolute top-1.5 -left-[35px] h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)]" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-[var(--color-text-h)]">{entry.company}</h3>
              <span className="font-mono text-xs text-[var(--color-muted)]">{entry.period}</span>
            </div>
            <p className="text-sm font-medium text-[var(--color-accent)]">{entry.role[lang]}</p>

            <ul className="mt-3 space-y-1.5">
              {entry.achievements[lang].map((a) => (
                <li key={a} className="flex gap-2 text-sm text-[var(--color-text)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]" />
                  {a}
                </li>
              ))}
            </ul>

            {entry.clients && (
              <p className="mt-3 text-xs text-[var(--color-muted)]">
                {lang === 'es' ? 'Clientes/proyectos: ' : 'Clients/projects: '}
                <span className="text-[var(--color-text)]">{entry.clients.join(' · ')}</span>
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-[var(--color-bg-soft)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-muted)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
