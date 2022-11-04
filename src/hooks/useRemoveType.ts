import { TemplateContext } from 'context/TemplateContext'
import { useContextSelector } from 'use-context-selector'

export function useRemoveType() {
  const removeType = useContextSelector(
    TemplateContext,
    template => template.removeType
  )

  return {
    removeType,
  }
}
