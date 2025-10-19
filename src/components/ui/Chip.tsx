import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const chipVariants = cva(
  'inline-flex items-center rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-brand-500 text-white',
        secondary: 'bg-slate-700 text-slate-200 border border-slate-600',
        outline: 'border border-brand-400 text-brand-400',
        ghost: 'text-slate-400 hover:text-slate-200',
      },
      size: {
        sm: 'px-2.5 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'sm',
    },
  }
)

export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {}

export function Chip({ className, variant, size, ...props }: ChipProps) {
  return (
    <span
      className={cn(chipVariants({ variant, size, className }))}
      {...props}
    />
  )
}
