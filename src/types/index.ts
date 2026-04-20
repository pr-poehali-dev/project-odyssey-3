import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: ReactNode
  showButton?: boolean
  buttonText?: string
  buttonHref?: string
  button2Text?: string
  button2Href?: string
  customContent?: ReactNode
  titleSize?: "normal" | "small"
}

export interface SectionProps extends Section {
  isActive: boolean
}