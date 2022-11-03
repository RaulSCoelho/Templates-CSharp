import React, { useContext, useRef } from 'react'

import { AddButton } from 'components/Buttons'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { TemplateContext } from 'context/TemplateContext'

import { Field } from './field'
import { FormStyle } from './styles'
import { Types } from './types'

export const Form: React.FC = () => {
  const { template, setAuthor, setNamespace, setDescription, addType } =
    useContext(TemplateContext)
  const typeRef = useRef<HTMLInputElement>()
  const authorRef = useRef<HTMLInputElement>()
  const namespaceRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLInputElement>()

  const setName = () => {
    setAuthor(authorRef.current.value)
  }

  const setProjectName = () => {
    setNamespace(namespaceRef.current.value)
  }

  const setDesc = () => {
    setDescription(descriptionRef.current.value)
  }

  return (
    <FormStyle>
      <Field
        label="Autor:"
        placeholder="Coloque seu nome"
        inputRef={authorRef}
        onInput={setName}
      />
      <Field
        label="Projeto:"
        defaultValue="SixConsult.NET.Foundation.(nome do seu projeto)"
        inputRef={namespaceRef}
        onInput={setProjectName}
      />
      <Field
        label="Descrição:"
        defaultValue="Um modelo de projeto pronto para criar {seu tipo de projeto}."
        inputRef={descriptionRef}
        onInput={setDesc}
      />
      <Flex direction="row" alignItems="start" gap={10}>
        <Text bold={true} fontSize="16pt" padding="0 5px 5px 5px">
          Tipos:
        </Text>
        <Flex justifyContent="start" wrap="wrap" gap={10}>
          {template.template.classifications.map((type, i) => {
            return <Types type={type} typeIndex={i} key={i} readonly />
          })}
          <Types placeholder="tipos da aplicação" inputRef={typeRef} />
          <AddButton
            size={25}
            onClick={() => {
              addType(typeRef.current.value)
              typeRef.current.value = ''
            }}
          />
        </Flex>
      </Flex>
    </FormStyle>
  )
}
