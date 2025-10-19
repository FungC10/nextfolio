export interface Project {
  id: string
  title: string
  slug: string
  summary: string
  description: string
  tags: string[]
  links: {
    demo: string
    github: string
  }
  image?: string
  featured?: boolean
}

export interface Skill {
  name: string
  description: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}
