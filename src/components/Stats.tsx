import { useTranslation } from 'react-i18next'
import { CalendarDays, Users, Gauge, TrendingDown } from 'lucide-react'
import { Section } from './Section'

const STATS = [
  { icon: CalendarDays, value: '9+', label: { es: 'Años de experiencia', en: 'Years of experience' } },
  { icon: Users, value: '5', label: { es: 'Devs liderados (Shareity)', en: 'Devs led (Shareity)' } },
  { icon: Gauge, value: '90+', label: { es: 'Lighthouse score', en: 'Lighthouse score' } },
  { icon: TrendingDown, value: '70%', label: { es: 'Menos bugs en producción', en: 'Fewer production bugs' } },
]

export function Stats() {
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  return (
    <Section maxWidth="max-w-3xl">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label.es} className="flex flex-col items-center text-center">
            <Icon className="text-[var(--color-accent)]" size={22} />
            <span className="mt-2 text-3xl font-semibold text-[var(--color-text-h)]">{value}</span>
            <span className="mt-1 text-xs text-[var(--color-muted)]">{label[lang]}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
