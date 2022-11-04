import { TemplateContext } from 'context/TemplateContext'
import { useContextSelector } from 'use-context-selector'

export function useSetDescription() {
  const setDescription = useContextSelector(
    TemplateContext,
    template => template.setDescription
  )

  return {
    setDescription,
  }
}
