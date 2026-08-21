export type ProjectStatus = 'live' | 'progress' | 'done'

export interface Project {
  slug: string
  title: string
  status: ProjectStatus
  stack: string[]
  demoUrl?: string
  codeUrl?: string
  description: { es: string; en: string }
  highlights: { es: string[]; en: string[] }
}

export const projects: Project[] = [
  {
    slug: 'app-bingo',
    title: 'Bingo en Vivo',
    status: 'progress',
    stack: ['NestJS', 'Socket.IO', 'Redis', 'PostgreSQL', 'Drizzle ORM', 'Zod'],
    description: {
      es: 'Plataforma de bingo en tiempo real con dinero real: salas en vivo, sorteo automático por servidor y billetera con libro contable (ledger) para cada jugador.',
      en: 'Real-time bingo platform with real money: live rooms, server-driven automatic draws, and a wallet with a full transaction ledger per player.',
    },
    highlights: {
      es: [
        'WebSockets con Socket.IO para salas en vivo y sorteo automático',
        'Billetera con ledger transaccional (sin floats, todo en centavos)',
        'Reparto de premios por línea y cartón lleno, con manejo de empates vía lock de Redis',
        'Autenticación JWT + roles, verificado end-to-end con pruebas de integración',
      ],
      en: [
        'Socket.IO WebSockets for live rooms and automatic server-driven draws',
        'Wallet with transactional ledger (integer cents, no floating point)',
        'Prize distribution for line and full-card wins, with tie handling via a Redis lock',
        'JWT auth + roles, verified end-to-end with integration tests',
      ],
    },
  },
  {
    slug: 'atencion-domiciliaria',
    title: 'Atención Domiciliaria',
    status: 'progress',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'NestJS'],
    description: {
      es: 'Sistema de gestión para servicios de salud a domicilio: agenda de visitas, pacientes y personal asistencial, con arquitectura por features.',
      en: 'Management system for home healthcare services: visit scheduling, patients, and care staff, built with a feature-based architecture.',
    },
    highlights: {
      es: [
        'Arquitectura "Screaming Architecture" por features (auth, pacientes, visitas)',
        'Backend NestJS con capas separadas de dominio y persistencia',
        'Modo oscuro, i18n y manejo de errores con Error Boundaries',
      ],
      en: [
        '"Screaming Architecture" organized by feature (auth, patients, visits)',
        'NestJS backend with clear domain/persistence separation',
        'Dark mode, i18n, and error handling via Error Boundaries',
      ],
    },
  },
  {
    slug: 'skeleton-base',
    title: 'Skeleton Base',
    status: 'live',
    stack: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
    demoUrl: 'https://skeeleton-dashboard.vercel.app',
    codeUrl: 'https://github.com/whisgelGonzalezDev/skeeleton-dashboard',
    description: {
      es: 'Scaffold propio de dashboard administrativo, reutilizado como base para varios proyectos posteriores (autenticación, modo oscuro, i18n en 4 idiomas, notificaciones y arquitectura modular).',
      en: 'A custom admin-dashboard scaffold I built and reuse as the foundation for later projects (auth, dark mode, 4-language i18n, toasts, and modular architecture).',
    },
    highlights: {
      es: [
        'Autenticación mock intercambiable por API real con un solo archivo',
        'i18next con 4 idiomas y componentes reutilizables sin texto hardcodeado',
        'Usado como base para Bingo en Vivo y Atención Domiciliaria',
      ],
      en: [
        'Mock auth swappable for a real API by editing a single file',
        'i18next with 4 languages and reusable components with no hardcoded strings',
        'Used as the foundation for Bingo en Vivo and Atención Domiciliaria',
      ],
    },
  },
  {
    slug: 'ruleta-corazon-aventurero',
    title: 'Ruleta Corazón Aventurero',
    status: 'live',
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    demoUrl: 'https://ruleta-corazon-aventurero.vercel.app',
    codeUrl: 'https://github.com/whisgelGonzalezDev/ruleta-corazon-aventurero',
    description: {
      es: 'Sitio interactivo de regalo con una ruleta animada, construido con JavaScript puro y animaciones CSS.',
      en: 'An interactive gift site featuring an animated wheel, built with vanilla JavaScript and CSS animations.',
    },
    highlights: {
      es: [
        'Animaciones CSS a medida sin librerías externas',
        'Lógica de la ruleta y física del giro en JavaScript puro',
      ],
      en: [
        'Custom CSS animations with no external libraries',
        'Wheel logic and spin physics in vanilla JavaScript',
      ],
    },
  },
  {
    slug: 'loyalty-cards-system',
    title: 'Sistema de Tarjetas de Lealtad',
    status: 'done',
    stack: ['React', 'TypeScript', 'NestJS'],
    description: {
      es: 'Plataforma de fidelización de clientes con tarjetas de puntos, separada en frontend y backend independientes.',
      en: 'Customer loyalty platform with points cards, split into independent frontend and backend services.',
    },
    highlights: {
      es: [
        'Frontend y backend en repositorios independientes con TypeScript de punta a punta',
        'Repositorio privado — código disponible bajo solicitud',
      ],
      en: [
        'Frontend and backend as independent repositories, TypeScript end to end',
        'Private repository — code available on request',
      ],
    },
  },
  {
    slug: 'dashboard-transporte',
    title: 'Dashboard de Transporte',
    status: 'progress',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL'],
    description: {
      es: 'Backend para un panel de control de operaciones de transporte: gestión de rutas, unidades y pasajeros.',
      en: 'Backend for a transportation operations dashboard: route, vehicle, and passenger management.',
    },
    highlights: {
      es: [
        'API modular en NestJS con separación clara por dominio',
        'Proyecto en desarrollo activo, aún sin repositorio público',
      ],
      en: [
        'Modular NestJS API with clear domain separation',
        'Actively in development, not yet in a public repository',
      ],
    },
  },
]
