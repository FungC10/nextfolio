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
    // Maintain order of projectIds
    displayProjects.sort((a, b) => {
      const indexA = projectIds.indexOf(a.id)
      const indexB = projectIds.indexOf(b.id)
      return indexA - indexB
    })
  } else if (limit) {
    displayProjects = projects.slice(0, limit)
  } else {
    // Sort by featured first, then maintain array order
    displayProjects = [...projects].sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10", className)}>
      {displayProjects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} className="h-full" />
      ))}
    </div>
  )
}

export default ProjectGrid