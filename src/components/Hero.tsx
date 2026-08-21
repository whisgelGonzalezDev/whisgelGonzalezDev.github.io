import { useTranslation } from 'react-i18next'
import { ArrowDown, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { GithubIcon } from './icons/GithubIcon'

const SOCIAL_LINKS = [
  { icon: GithubIcon, href: 'https://github.com/whisgelGonzalezDev', label: 'GitHub' },
  { icon: Mail, href: 'mailto:whisgeljesus10@gmail.com', label: 'Email' },
]

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-32 md:pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(600px circle at 50% 0%, var(--color-accent-soft), transparent 70%)',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-muted)] uppercase">
          {t('hero.kicker')}
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[var(--color-text-h)] md:text-6xl">
          {t('hero.title')}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-balance text-base text-[var(--color-muted)] md:text-lg">
          {t('hero.subtitle')}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-105"
          >
            {t('hero.cta_projects')}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium text-[var(--color-text-h)] transition-colors hover:bg-[var(--color-bg-soft)]"
          >
            {t('hero.cta_contact')}
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </motion.div>

      <div className="mt-16 flex justify-center">
        <ArrowDown className="animate-bounce text-[var(--color-muted)]" size={18} />
      </div>
    </section>
  )
}
