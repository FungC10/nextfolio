import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-soft hover:shadow-medium transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}
