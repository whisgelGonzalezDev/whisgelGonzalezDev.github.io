import { useTranslation } from 'react-i18next'
import { GraduationCap } from 'lucide-react'
import { Section } from './Section'

export function Education() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <Section maxWidth="max-w-3xl">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('education.title')}
      </h2>

      <div className="mt-6 flex items-start gap-4">
        <div className="rounded-xl bg-[var(--color-accent-soft)] p-2.5 text-[var(--color-accent)]">
          <GraduationCap size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-[var(--color-text-h)]">
            {lang === 'es' ? 'TSU en Informática' : 'Associate Degree in Computer Science'}
          </h3>
          <p className="text-sm text-[var(--color-muted)]">
            Colegio Universitario de Caracas · 2015 – 2017
          </p>
          <p className="mt-2 text-sm text-[var(--color-text)]">
            {lang === 'es'
              ? 'Equivalente a Bachelor + 9 años de práctica profesional.'
              : 'Equivalent to a Bachelor’s degree + 9 years of professional practice.'}
          </p>
        </div>
      </div>
    </Section>
  )
}
