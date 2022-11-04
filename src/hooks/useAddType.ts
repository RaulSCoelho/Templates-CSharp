import { TemplateContext } from 'context/TemplateContext'
import { useContextSelector } from 'use-context-selector'

export function useAddType() {
  const addType = useContextSelector(
    TemplateContext,
    template => template.addType
  )

  return {
    addType,
  }
}
