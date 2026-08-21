import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('about.title')}
      </h2>
      <p className="mt-4 text-balance text-xl leading-relaxed text-[var(--color-text-h)] md:text-2xl">
        {t('about.body')}
      </p>
    </section>
  )
}
