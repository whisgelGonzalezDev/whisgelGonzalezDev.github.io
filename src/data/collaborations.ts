export interface Collaboration {
  name: string
  role: { es: string; en: string }
  note: { es: string; en: string }
  url?: string
}

export const collaborations: Collaboration[] = [
  {
    name: 'Mowi',
    role: { es: 'Desarrollador', en: 'Developer' },
    note: {
      es: 'Colaborador en el desarrollo de producto en Mowi.',
      en: 'Contributing developer on Mowi’s product team.',
    },
  },
  {
    name: 'SyssoftOne',
    role: { es: 'Desarrollador', en: 'Developer' },
    note: {
      es: 'Colaborador en proyectos de software para SyssoftOne.',
      en: 'Contributing developer on software projects for SyssoftOne.',
    },
  },
  {
    name: 'Gateway API',
    role: { es: 'Colaborador', en: 'Contributor' },
    note: {
      es: 'Participación en el desarrollo de una API gateway para integración de servicios.',
      en: 'Contributed to the development of an API gateway for service integration.',
    },
  },
  {
    name: 'Cute',
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    note: {
      es: 'Ecosistema digital para barberías y negocios de estética (Cute by Codeaver): landing pública, dashboard y backend.',
      en: 'Digital ecosystem for barbershops and beauty businesses (Cute by Codeaver): public landing page, dashboard, and backend.',
    },
  },
]
