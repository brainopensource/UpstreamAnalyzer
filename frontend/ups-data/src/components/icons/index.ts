export type IconType = 'fetch' | 'process' | 'aggregate' | 'model'

export interface IconProps {
  className?: string
  size?: number
}

// Base icon styles that can be reused
export const baseIconStyles = "stroke-current"
export const iconSizes = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}

// Icon colors
export const iconColors = {
  blue: "text-blue-400",
  purple: "text-purple-400",
  indigo: "text-indigo-400",
  sky: "text-sky-400"
} 