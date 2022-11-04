import { TemplateContext } from 'context/TemplateContext'
import { useContextSelector } from 'use-context-selector'

export function useTemplate() {
  const template = useContextSelector(
    TemplateContext,
    template => template.template
  )

  return {
    template,
  }
}
