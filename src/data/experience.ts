export interface ExperienceEntry {
  company: string
  url?: string
  role: { es: string; en: string }
  period: string
  achievements: { es: string[]; en: string[] }
  clients?: string[]
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Mowi',
    role: { es: 'Full Stack Web Developer (Frontend Lead)', en: 'Full Stack Web Developer (Frontend Lead)' },
    period: '2025 — Presente',
    achievements: {
      es: [
        'Módulo EFRABUS: reduje el tiempo de aprobación de solicitudes en 60% (3 pasos → 1) con flujos responsivos y componentes Vue 3 (Composition API) accesibles (WCAG AA).',
        'Arquitectura de roles y permisos multi-nivel con sincronización WebSocket: soporta 500+ usuarios concurrentes sin degradación, con bundles optimizados 40% (450KB → 270KB).',
        'Panel de notificaciones automáticas vía WhatsApp Business API: 95% de entrega, 10,000+ notificaciones/mes sin intervención manual.',
      ],
      en: [
        'EFRABUS module: cut request-approval time by 60% (3 steps → 1) with responsive workflows and accessible (WCAG AA) Vue 3 Composition API components.',
        'Multi-level roles & permissions architecture with WebSocket sync: supports 500+ concurrent users with no performance degradation, 40% smaller bundles (450KB → 270KB).',
        'Automated notification panel via WhatsApp Business API: 95% delivery rate, 10,000+ notifications/month with no manual intervention.',
      ],
    },
    stack: ['Vue 3', 'Angular', 'Next.js', 'PostgreSQL', 'WebSocket', 'WCAG'],
  },
  {
    company: 'Mipto Tech',
    role: { es: 'Full Stack Web Developer (iGaming SaaS)', en: 'Full Stack Web Developer (iGaming SaaS)' },
    period: '2022 — 2026',
    achievements: {
      es: [
        'Diseñé y construí 3 plataformas web mobile-first (BetConnections, SysSoft, CasinosJeff CR) con 90+ score Lighthouse y 35% más conversión en landing pages.',
        'Integré 2 proveedores de casino (Vibra Gaming, Inte) con pasarela de wallet normalizada: 99.5% uptime procesando 50K+ transacciones/día vía WebSocket.',
        'Automaticé la normalización de datos de proveedores (Python + openpyxl): onboarding de 8 horas a 15 minutos.',
        'Autenticación biométrica con WebAuthn (passkeys): 100% de adopción MFA en usuarios premium.',
      ],
      en: [
        'Designed and built 3 mobile-first web platforms (BetConnections, SysSoft, CasinosJeff CR) with 90+ Lighthouse scores and 35% higher landing-page conversion.',
        'Integrated 2 casino providers (Vibra Gaming, Inte) with a normalized wallet gateway: 99.5% uptime processing 50K+ transactions/day over WebSocket.',
        'Automated provider data normalization (Python + openpyxl): onboarding time cut from 8 hours to 15 minutes.',
        'Biometric authentication with WebAuthn (passkeys): 100% MFA adoption among premium users.',
      ],
    },
    clients: ['BetConnections', 'SysSoft', 'CasinosJeff CR'],
    stack: ['React', 'Vue 3', 'Next.js', 'NestJS', 'Laravel', 'PostgreSQL', 'MongoDB', 'WebAuthn'],
  },
  {
    company: 'Shareity',
    role: { es: 'Jefe de Equipo de Desarrollo (Tech Lead)', en: 'Development Team Lead (Tech Lead)' },
    period: '2022 — 2025',
    achievements: {
      es: [
        'Lideré un equipo de 5 developers (planificación técnica, code review): reduje bugs en producción en 70% (12/sprint → 3/sprint) con arquitectura escalable, pair programming y estándares de CI/CD.',
        'Definí la arquitectura frontend responsiva con componentes reutilizables: mejoré Core Web Vitals en 50% (LCP 2.8s → 1.4s, CLS 0.15 → 0.05), +25% en engagement.',
      ],
      en: [
        'Led a team of 5 developers (technical planning, code review): cut production bugs by 70% (12/sprint → 3/sprint) with scalable architecture, pair programming, and CI/CD standards.',
        'Defined the responsive frontend architecture with reusable components: improved Core Web Vitals by 50% (LCP 2.8s → 1.4s, CLS 0.15 → 0.05), +25% engagement.',
      ],
    },
    stack: ['Vue 3', 'React', 'REST APIs', 'Git Workflow', 'Agile'],
  },
  {
    company: 'Codeaver',
    role: { es: 'Full Stack Web Developer (Freelance)', en: 'Full Stack Web Developer (Freelance)' },
    period: '2022 — Presente',
    achievements: {
      es: [
        'Plataforma logística corporativa con dashboard y motor de cotización: rank #3 en SEO local, +200 leads/mes.',
        'Entrega full-cycle para múltiples clientes (logística, retail, contenido, servicios de estética): +25 keywords en Google top-10, 1,500 sesiones orgánicas/mes.',
      ],
      en: [
        'Corporate logistics platform with dashboard and quoting engine: #3 local SEO rank, +200 leads/month.',
        'Full-cycle delivery for multiple clients (logistics, retail, content, beauty services): +25 keywords in Google top-10, 1,500 organic sessions/month.',
      ],
    },
    clients: ['Cute'],
    stack: ['Next.js', 'Laravel', 'PostgreSQL', 'SEO', 'Web Performance'],
  },
]
