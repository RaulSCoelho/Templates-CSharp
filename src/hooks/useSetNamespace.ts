import { TemplateContext } from 'context/TemplateContext'
import { useContextSelector } from 'use-context-selector'

export function useSetNamespace() {
  const setNamespace = useContextSelector(
    TemplateContext,
    template => template.setNamespace
  )

  return {
    setNamespace,
  }
}
