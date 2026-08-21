export interface SkillGroup {
  category: { es: string; en: string }
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'Next.js', 'Vue 3', 'Angular', 'TypeScript', 'Tailwind CSS', 'WCAG Accessibility'],
  },
  {
    category: { es: 'Backend', en: 'Backend' },
    items: ['NestJS', 'Laravel', 'Node.js', 'REST APIs', 'WebSockets', 'WebAuthn', 'JWT'],
  },
  {
    category: { es: 'Datos & Infra', en: 'Data & Infra' },
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS RDS', 'Redis', 'Docker'],
  },
  {
    category: { es: 'Performance & SEO', en: 'Performance & SEO' },
    items: ['Lighthouse', 'Core Web Vitals', 'Schema Markup', 'Lazy Loading'],
  },
  {
    category: { es: 'Herramientas', en: 'Tooling' },
    items: ['Git', 'CI/CD', 'Jira', 'Vercel', 'GitHub Actions', 'Figma'],
  },
]
