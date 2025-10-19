'use client'

import { cn } from '@/lib/utils'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  limit?: number
  projectIds?: string[]
  className?: string
}

function ProjectGrid({ limit, projectIds, className }: ProjectGridProps) {
  let displayProjects = projects
  
  if (projectIds) {
    displayProjects = projects.filter(project => projectIds.includes(project.id))
  } else if (limit) {
    displayProjects = projects.slice(0, limit)
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10", className)}>
      {displayProjects.map((project) => (
        <ProjectCard key={project.title} project={project} className="h-full" />
      ))}
    </div>
  )
}

export default ProjectGrid