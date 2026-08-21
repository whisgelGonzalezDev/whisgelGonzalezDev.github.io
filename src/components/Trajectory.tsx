import { useTranslation } from 'react-i18next'

const STAGES = [
  {
    tag: { es: 'Fundamentos', en: 'Foundations' },
    stack: 'PHP · Laravel · jQuery · Bootstrap',
    body: {
      es: 'Primeros proyectos web: CRUDs, sitios institucionales y APIs sencillas en PHP/Laravel.',
      en: 'Early web projects: CRUDs, institutional sites, and simple APIs in PHP/Laravel.',
    },
  },
  {
    tag: { es: 'Frameworks modernos', en: 'Modern frameworks' },
    stack: 'Angular · Vue · Ionic',
    body: {
      es: 'Transición a SPAs con componentes reutilizables, formularios reactivos y apps móviles híbridas.',
      en: 'Shift to SPAs with reusable components, reactive forms, and hybrid mobile apps.',
    },
  },
  {
    tag: { es: 'Ecosistema React', en: 'React ecosystem' },
    stack: 'React · TypeScript · Vite · Tailwind CSS',
    body: {
      es: 'Adopción de TypeScript de punta a punta y construcción de un scaffold propio reutilizable entre proyectos.',
      en: 'End-to-end TypeScript adoption and building a reusable in-house scaffold across projects.',
    },
  },
  {
    tag: { es: 'Arquitecturas complejas', en: 'Complex architectures' },
    stack: 'NestJS · WebSockets · Redis · PostgreSQL',
    body: {
      es: 'Sistemas con lógica de negocio crítica: billeteras con ledger, tiempo real y control de roles.',
      en: 'Systems with critical business logic: ledger-based wallets, real-time features, and role control.',
    },
  },
]

export function Trajectory() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <section id="trajectory" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('trajectory.title')}
      </h2>
      <p className="mt-2 text-[var(--color-muted)]">{t('trajectory.subtitle')}</p>

      <ol className="mt-10 space-y-10 border-l border-[var(--color-border)] pl-8">
        {STAGES.map((stage) => (
          <li key={stage.stack} className="relative">
            <span className="absolute top-1.5 -left-[35px] h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)]" />
            <span className="text-xs font-semibold tracking-wide text-[var(--color-accent)] uppercase">
              {stage.tag[lang]}
            </span>
            <p className="mt-1 font-mono text-xs text-[var(--color-muted)]">{stage.stack}</p>
            <p className="mt-2 text-[var(--color-text)]">{stage.body[lang]}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
