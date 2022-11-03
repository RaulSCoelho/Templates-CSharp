import React, { createContext, useCallback, useState } from 'react'

interface TemplateJSON {
  template?: {
    $schema?: string
    author?: string
    classifications: string[]
    name?: string
    defaultName?: string
    identity?: string
    shortName?: string
    tags?: {
      language?: string
      type?: string
    }
    sourceName?: string
    preferNameDirectory?: boolean
    description?: string
  }
  ide?: {
    $schema?: string
    icon?: string
  }
}

interface TemplateContextType {
  template: TemplateJSON
  setAuthor: (author: string) => void
  setNamespace: (namespace: string) => void
  setDescription: (description: string) => void
  addType: (type: string) => void
  removeType: (index: number) => void
}

export const TemplateContext = createContext<TemplateContextType>(null)

interface Props {
  children: React.ReactNode
}

const INITIAL_STATE: TemplateJSON = {
  template: {
    $schema: 'http://json.schemastore.org/template',
    author: '',
    classifications: [],
    name: '',
    defaultName: 'SixConsult.NET.Foundation.(nome do seu projeto)', // NÃO ALTERAR
    identity: '',
    shortName: '',
    tags: {
      language: 'C#', // NÃO ALTERAR
      type: 'project', // NÃO ALTERAR
    },
    sourceName: '',
    preferNameDirectory: true, // NÃO ALTERAR
    description: '',
  },
  ide: {
    $schema: 'http://json.schemastore.org/vs-2017.3.host', // NÃO ALTERAR
    icon: 'icon.png', // Seu icone
  },
}

export const TemplateProvider: React.FC<Props> = ({ children }) => {
  const [template, setTemplate] = useState(INITIAL_STATE)

  const setAuthor = useCallback((author: string) => {
    if (author) {
      setTemplate(state => ({
        ...state,
        template: {
          ...state.template,
          author,
        },
      }))
    }
  }, [])

  const setNamespace = useCallback((namespace: string) => {
    if (namespace) {
      setTemplate(state => ({
        ...state,
        template: {
          ...state.template,
          name: namespace,
          identity: namespace,
          shortName: namespace,
          sourceName: namespace,
        },
      }))
    }
  }, [])

  const setDescription = useCallback((description: string) => {
    if (description) {
      setTemplate(state => ({
        ...state,
        template: {
          ...state.template,
          description,
        },
      }))
    }
  }, [])

  const addType = useCallback((type: string) => {
    if (type) {
      setTemplate(state => ({
        ...state,
        template: {
          ...state.template,
          classifications: [...state.template.classifications, type],
        },
      }))
    }
  }, [])

  const removeType = useCallback((index: number) => {
    setTemplate(state => ({
      ...state,
      template: {
        ...state.template,
        classifications: [
          ...state.template.classifications.filter((c, i) => i !== index),
        ],
      },
    }))
  }, [])

  return (
    <TemplateContext.Provider
      value={{
        template,
        addType,
        removeType,
        setAuthor,
        setNamespace,
        setDescription,
      }}
    >
      {children}
    </TemplateContext.Provider>
  )
}
