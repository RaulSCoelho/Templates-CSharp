import React from 'react'

import { useSetAuthor } from 'hooks/useSetAuthor'
import { useSetDescription } from 'hooks/useSetDescription'
import { useSetNamespace } from 'hooks/useSetNamespace'

import { Field } from './field'
import { FormStyle } from './styles'
import { Types } from './types'

export const Form: React.FC = () => {
  const { setAuthor } = useSetAuthor()
  const { setNamespace } = useSetNamespace()
  const { setDescription } = useSetDescription()

  return (
    <FormStyle>
      <Field
        label="Autor:"
        placeholder="Coloque seu nome"
        onInput={setAuthor}
      />
      <Field
        label="Projeto:"
        defaultValue="SixConsult.NET.Foundation.(nome do seu projeto)"
        onInput={setNamespace}
      />
      <Field
        label="Descrição:"
        defaultValue="Um modelo de projeto pronto para criar {seu tipo de projeto}."
        onInput={setDescription}
      />
      <Types />
    </FormStyle>
  )
}
