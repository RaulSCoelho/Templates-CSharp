import React, { useContext } from 'react'

import { TemplateContext } from 'context/TemplateContext'

import { Field } from './field'
import { FormStyle } from './styles'
import { Types } from './types'

export const Form: React.FC = () => {
  const { setAuthor, setNamespace, setDescription } =
    useContext(TemplateContext)

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
