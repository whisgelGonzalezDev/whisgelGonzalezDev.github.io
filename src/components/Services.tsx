import { useTranslation } from 'react-i18next'
import { LayoutTemplate, Server, UserCog, Rocket, type LucideIcon } from 'lucide-react'
import { Section } from './Section'

interface Service {
  icon: LucideIcon
  title: { es: string; en: string }
  items: { es: string[]; en: string[] }
}

const SERVICES: Service[] = [
  {
    icon: LayoutTemplate,
    title: { es: 'Desarrollo Frontend', en: 'Frontend Development' },
    items: {
      es: ['Interfaces responsivas y accesibles (WCAG)', 'React, Next.js, Vue 3, Angular', 'Diseño mobile-first'],
      en: ['Responsive, accessible (WCAG) interfaces', 'React, Next.js, Vue 3, Angular', 'Mobile-first design'],
    },
  },
  {
    icon: Server,
    title: { es: 'Backend & APIs', en: 'Backend & APIs' },
    items: {
      es: ['APIs REST con NestJS y Laravel', 'WebSockets y sincronización en tiempo real', 'Autenticación JWT / WebAuthn'],
      en: ['REST APIs with NestJS and Laravel', 'WebSockets and real-time sync', 'JWT / WebAuthn authentication'],
    },
  },
  {
    icon: UserCog,
    title: { es: 'Liderazgo Técnico', en: 'Technical Leadership' },
    items: {
      es: ['Planificación técnica y code review', 'Arquitectura escalable y estándares de CI/CD', 'Mentoría de equipos de desarrollo'],
      en: ['Technical planning and code review', 'Scalable architecture and CI/CD standards', 'Mentoring development teams'],
    },
  },
  {
    icon: Rocket,
    title: { es: 'Performance & SEO', en: 'Performance & SEO' },
    items: {
      es: ['Optimización de Core Web Vitals', 'Auditorías Lighthouse (90+ score)', 'SEO técnico y schema markup'],
      en: ['Core Web Vitals optimization', 'Lighthouse audits (90+ score)', 'Technical SEO and schema markup'],
    },
  },
]

export function Services() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <Section id="services" maxWidth="max-w-5xl">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('services.title')}
      </h2>
      <p className="mt-2 text-[var(--color-muted)]">{t('services.subtitle')}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {SERVICES.map(({ icon: Icon, title, items }) => (
          <div
            key={title.es}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_var(--color-accent-soft)]"
          >
            <div className="inline-flex rounded-xl bg-[var(--color-accent-soft)] p-2.5 text-[var(--color-accent)]">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-[var(--color-text-h)]">{title[lang]}</h3>
            <ul className="mt-3 space-y-1.5">
              {items[lang].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--color-muted)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
