export interface SkillGroup {
  category: { es: string; en: string }
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Angular', 'Vue'],
  },
  {
    category: { es: 'Backend', en: 'Backend' },
    items: ['NestJS', 'Node.js', 'PHP / Laravel', 'Zod', 'JWT / RBAC'],
  },
  {
    category: { es: 'Datos & Infra', en: 'Data & Infra' },
    items: ['PostgreSQL', 'Drizzle ORM', 'Redis', 'Socket.IO'],
  },
  {
    category: { es: 'Herramientas', en: 'Tooling' },
    items: ['Git', 'Vercel', 'GitHub Actions', 'Figma'],
  },
]
