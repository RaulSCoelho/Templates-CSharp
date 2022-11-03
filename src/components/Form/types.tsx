import React, { useContext } from 'react'

import { DeleteButton } from 'components/Buttons'
import { Flex } from 'components/Flex'
import { Input } from 'components/Input'
import { TemplateContext } from 'context/TemplateContext'

interface TypesProps {
  placeholder?: string
  type?: string
  inputRef?: React.MutableRefObject<HTMLInputElement>
  readonly?: boolean
  typeIndex?: number
}

export const Types: React.FC<TypesProps> = props => {
  const { removeType } = useContext(TemplateContext)

  return (
    <Flex width="auto" direction="row">
      <Input
        type="text"
        value={props.type}
        placeholder={props.placeholder}
        ref={props.inputRef}
        readOnly={props.readonly}
        textAlign="center"
      />
      <DeleteButton size={20} onClick={() => removeType(props.typeIndex)} />
    </Flex>
  )
}
