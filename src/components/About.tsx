import { useTranslation } from 'react-i18next'
import { Section } from './Section'

export function About() {
  const { t } = useTranslation()
  return (
    <Section id="about" maxWidth="max-w-3xl">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('about.title')}
      </h2>
      <p className="mt-4 text-balance text-xl leading-relaxed text-[var(--color-text-h)] md:text-2xl">
        {t('about.body')}
      </p>
    </Section>
  )
}
