export interface Language {
  name: { es: string; en: string }
  level: { es: string; en: string }
  width: string
}

export const languages: Language[] = [
  {
    name: { es: 'Español', en: 'Spanish' },
    level: { es: 'Nativo', en: 'Native' },
    width: '100%',
  },
  {
    name: { es: 'Inglés', en: 'English' },
    level: { es: 'Intermedio-Avanzado', en: 'Intermediate-Advanced' },
    width: '72%',
  },
]
