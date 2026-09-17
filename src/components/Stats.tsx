import { useTranslation } from 'react-i18next'
import { CalendarDays, Users, Gauge, TrendingDown } from 'lucide-react'

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
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-soft)] px-6 py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label.es} className="flex flex-col items-center text-center md:items-start md:text-left">
            <Icon className="text-[var(--color-accent)]" size={22} />
            <span className="mt-2 text-3xl font-semibold text-[var(--color-text-h)]">{value}</span>
            <span className="mt-1 text-xs text-[var(--color-muted)]">{label[lang]}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
