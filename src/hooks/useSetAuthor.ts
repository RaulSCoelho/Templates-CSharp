import { TemplateContext } from 'context/TemplateContext'
import { useContextSelector } from 'use-context-selector'

export function useSetAuthor() {
  const setAuthor = useContextSelector(
    TemplateContext,
    template => template.setAuthor
  )

  return {
    setAuthor,
  }
}
