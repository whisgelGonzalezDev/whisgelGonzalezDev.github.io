import { useTranslation } from 'react-i18next'
import { ExternalLink, Lock } from 'lucide-react'
import type { Project } from '../data/projects'
import { GithubIcon } from './icons/GithubIcon'

const STATUS_STYLE: Record<Project['status'], string> = {
  live: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  progress: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  done: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
}

export function ProjectCard({ project }: { project: Project }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_0_28px_var(--color-accent-soft)]">
      {project.image && (
        <div className="aspect-[4/3] w-full overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-[var(--color-text-h)]">{project.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${STATUS_STYLE[project.status]}`}
        >
          {t(`projects.status_${project.status}`)}
        </span>
      </div>

      <p className="mt-3 text-sm text-[var(--color-muted)]">{project.description[lang]}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights[lang].map((h) => (
          <li key={h} className="flex gap-2 text-sm text-[var(--color-text)]">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-[var(--color-bg-soft)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-muted)]"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-[var(--color-border)] pt-4 text-sm">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--color-accent)] hover:underline"
          >
            <ExternalLink size={14} /> {t('projects.view_demo')}
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-text-h)]"
          >
            <GithubIcon size={14} /> {t('projects.view_code')}
          </a>
        )}
        {!project.demoUrl && !project.codeUrl && (
          <span className="inline-flex items-center gap-1.5 text-[var(--color-muted)]">
            <Lock size={13} /> {t('projects.no_public_link')}
          </span>
        )}
      </div>
      </div>
    </article>
  )
}
