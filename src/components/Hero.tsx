import { useTranslation } from 'react-i18next'
import { Download, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
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
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(600px circle at 50% 0%, var(--color-accent-soft), transparent 70%)',
        }}
      />

      <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-muted)] uppercase">
            {t('hero.kicker')}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[var(--color-text-h)] md:text-5xl">
            {t('hero.title')}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-balance text-base text-[var(--color-muted)] md:mx-0 md:text-lg">
            {t('hero.subtitle')}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-105"
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {TECH_TAGS.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[var(--color-bg-soft)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 md:justify-start">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
            style={{
              background:
                'radial-gradient(circle at 30% 20%, var(--color-accent-soft), transparent 60%)',
            }}
          />
          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] shadow-xl">
            <img src={heroPhoto} alt="Whisgel González" className="aspect-[4/5] w-full object-cover" />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-lg sm:block">
            <pre className="overflow-hidden font-mono text-[10px] leading-relaxed text-[var(--color-muted)]">
              <code>
                {'const dev = {\n'}
                {"  name: 'Whisgel',\n"}
                {"  role: 'Full-Stack',\n"}
                {'  exp: 9,\n'}
                {'};'}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
