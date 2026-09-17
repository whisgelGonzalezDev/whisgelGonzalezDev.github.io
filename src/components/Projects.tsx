import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  const { t } = useTranslation()
  return (
    <Section id="projects" maxWidth="max-w-5xl">
      <h2 className="text-sm font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        {t('projects.title')}
      </h2>
      <p className="mt-2 text-[var(--color-muted)]">{t('projects.subtitle')}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  )
}
