export type SkillLevel = 'basico' | 'intermedio' | 'avanzado' | 'experto'

export const LEVEL_LABEL: Record<SkillLevel, { es: string; en: string }> = {
  basico: { es: 'Básico', en: 'Basic' },
  intermedio: { es: 'Intermedio', en: 'Intermediate' },
  avanzado: { es: 'Avanzado', en: 'Advanced' },
  experto: { es: 'Experto', en: 'Expert' },
}

export const LEVEL_WIDTH: Record<SkillLevel, string> = {
  basico: '30%',
  intermedio: '55%',
  avanzado: '80%',
  experto: '100%',
}

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillGroup {
  category: { es: string; en: string }
  items: Skill[]
}

export const tools: string[] = ['Git', 'CI/CD', 'Jira', 'Vercel', 'GitHub Actions', 'Figma']

export const skillGroups: SkillGroup[] = [
  {
    category: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'React', level: 'experto' },
      { name: 'TypeScript', level: 'experto' },
      { name: 'Tailwind CSS', level: 'experto' },
      { name: 'Next.js', level: 'avanzado' },
      { name: 'Vue 3', level: 'avanzado' },
      { name: 'Angular', level: 'intermedio' },
    ],
  },
  {
    category: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'Node.js', level: 'experto' },
      { name: 'NestJS', level: 'avanzado' },
      { name: 'Laravel', level: 'avanzado' },
      { name: 'WebSockets', level: 'avanzado' },
      { name: 'WebAuthn', level: 'intermedio' },
    ],
  },
  {
    category: { es: 'Datos & Infra', en: 'Data & Infra' },
    items: [
      { name: 'PostgreSQL', level: 'avanzado' },
      { name: 'MongoDB', level: 'intermedio' },
      { name: 'MySQL', level: 'intermedio' },
      { name: 'Redis', level: 'intermedio' },
      { name: 'Docker', level: 'intermedio' },
    ],
  },
  {
    category: { es: 'Performance & SEO', en: 'Performance & SEO' },
    items: [
      { name: 'Core Web Vitals', level: 'avanzado' },
      { name: 'Lighthouse', level: 'avanzado' },
      { name: 'SEO técnico', level: 'avanzado' },
      { name: 'Schema Markup', level: 'intermedio' },
    ],
  },
]
