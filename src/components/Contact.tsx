import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'

export function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="text-3xl font-semibold text-[var(--color-text-h)] md:text-4xl">
        {t('contact.title')}
      </h2>
      <p className="mt-3 text-[var(--color-muted)]">{t('contact.subtitle')}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:whisgeljesus10@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-105"
        >
          <Mail size={16} /> {t('contact.cta')}
        </a>
        <a
          href="https://github.com/whisgelGonzalezDev"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium text-[var(--color-text-h)] transition-colors hover:bg-[var(--color-bg-soft)]"
        >
          <GithubIcon size={16} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/whisgel-gonzalez"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium text-[var(--color-text-h)] transition-colors hover:bg-[var(--color-bg-soft)]"
        >
          <LinkedinIcon size={16} /> LinkedIn
        </a>
      </div>

      <p className="mt-6 text-xs text-[var(--color-muted)]">Caracas, Venezuela (UTC-4) · Remoto</p>
    </section>
  )
}
