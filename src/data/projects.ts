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

export const projects: Project[] = [
  {
    id: '1',
    title: 'Nextfolio',
    slug: 'nextfolio',
    summary: 'Your brand hub with unified motion and six case studies.',
    description: 'A comprehensive personal portfolio showcasing 7 diverse projects with smooth animations, case studies, and professional presentation. Features unified design system, responsive layout, and optimized performance.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
    links: {
      demo: 'https://nextfolio.dev',
      github: 'https://github.com/yourusername/nextfolio',
    },
    featured: true,
  },
  {
    id: '2',
    title: 'InsightBoard',
    slug: 'insightboard',
    summary: 'Live crypto dashboard with charts, filters, and watchlist.',
    description: 'A real-time cryptocurrency tracking dashboard featuring live price updates, interactive charts, custom watchlists, and advanced filtering. Built with data visualization and caching logic for optimal performance.',
    tags: ['Next.js', 'TypeScript', 'TanStack Query', 'Recharts'],
    links: {
      demo: 'https://insightboard.vercel.app',
      github: 'https://github.com/yourusername/insightboard',
    },
    featured: true,
  },
  {
    id: '3',
    title: 'TaskZen',
    slug: 'taskzen',
    summary: 'Smooth Kanban with drag-and-drop and global store.',
    description: 'A lightweight yet powerful Kanban board application with intuitive drag-and-drop functionality, persistent storage, and smooth micro-animations. Perfect for personal and team task management.',
    tags: ['React', 'TypeScript', 'Zustand', 'React DnD'],
    links: {
      demo: 'https://taskzen.vercel.app',
      github: 'https://github.com/yourusername/taskzen',
    },
    featured: true,
  },
  {
    id: '4',
    title: 'WeatherFlow',
    slug: 'weatherflow',
    summary: 'Map-based weather search with dynamic visuals.',
    description: 'An immersive weather application combining location-based forecasts with interactive maps. Features city search, geolocation, animated weather icons, and beautiful visual transitions.',
    tags: ['React', 'TypeScript', 'OpenWeather API', 'Leaflet'],
    links: {
      demo: 'https://weatherflow.vercel.app',
      github: 'https://github.com/yourusername/weatherflow',
    },
    featured: false,
  },
  {
    id: '5',
    title: 'ShopVerse',
    slug: 'shopverse',
    summary: 'From product list to Stripe checkout + validation.',
    description: 'A complete e-commerce demonstration covering the full shopping journey from product discovery to secure checkout. Features product catalog, cart management, wishlist, and Stripe integration.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'Zod', 'React Hook Form'],
    links: {
      demo: 'https://shopverse.vercel.app',
      github: 'https://github.com/yourusername/shopverse',
    },
    featured: false,
  },
  {
    id: '6',
    title: 'Accessly',
    slug: 'accessly',
    summary: 'Auth, roles, realtime chat, and SSR dashboard.',
    description: 'An enterprise-grade authentication and collaboration platform featuring user roles, real-time chat, and server-side rendered dashboards. Demonstrates full-stack development with modern auth patterns.',
    tags: ['Next.js', 'NextAuth', 'Prisma', 'Socket.io'],
    links: {
      demo: 'https://accessly.vercel.app',
      github: 'https://github.com/yourusername/accessly',
    },
    featured: false,
  },
  {
    id: '7',
    title: 'MotionCanvas',
    slug: 'motioncanvas',
    summary: 'Interactive generative art for creative flair.',
    description: 'A creative showcase of generative art and interactive visuals demonstrating advanced frontend capabilities. Features canvas-based graphics, mouse/touch interactions, and AI-driven parameter controls.',
    tags: ['React', 'Canvas API', 'Three.js', 'Framer Motion'],
    links: {
      demo: 'https://motioncanvas.vercel.app',
      github: 'https://github.com/yourusername/motioncanvas',
    },
    featured: false,
  },
]
