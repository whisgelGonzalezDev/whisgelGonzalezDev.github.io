import { useTranslation } from 'react-i18next'
import { Download, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { Card } from './Card'
import heroPhoto from '../assets/whisgel-photo.jpg'

const SOCIAL_LINKS = [
  { icon: GithubIcon, href: 'https://github.com/whisgelGonzalezDev', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/whisgel-gonzalez', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:whisgeljesus10@gmail.com', label: 'Email' },
]

const TECH_TAGS = ['React', 'Next.js', 'Vue 3', 'TypeScript', 'NestJS', 'Tailwind CSS']

export function Hero() {
  const { t } = useTranslation()

  return (
    <div className="px-6 pt-28 pb-6 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-2xl"
      >
        <Card id="top" className="text-center">
          <div
            className="mx-auto h-28 w-28 rounded-full p-[3px]"
            style={{
              background:
                'conic-gradient(from 180deg, var(--color-accent), var(--color-accent-2), var(--color-accent))',
            }}
          >
            <img
              src={heroPhoto}
              alt="Whisgel González"
              className="h-full w-full rounded-full border-4 border-[var(--color-surface)] object-cover"
            />
          </div>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text-h)] md:text-4xl">
            {t('hero.greeting')}
          </h1>
          <p className="mt-1.5 text-sm font-medium tracking-wide text-[var(--color-accent)] uppercase">
            {t('hero.kicker')}
          </p>

          <p className="mx-auto mt-4 max-w-md text-balance text-sm text-[var(--color-muted)] md:text-base">
            {t('hero.subtitle')}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_var(--color-accent)] transition-transform hover:scale-105"
            >
              {t('hero.cta_projects')}
            </a>
            <a
              href="/cv/Whisgel-Gonzalez-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium text-[var(--color-text-h)] transition-colors hover:bg-[var(--color-bg-soft)]"
            >
              <Download size={15} /> {t('hero.cta_cv')}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {TECH_TAGS.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[var(--color-bg-soft)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
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
        </Card>
      </motion.div>
    </div>
  )
}
