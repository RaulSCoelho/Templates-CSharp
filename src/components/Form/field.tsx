import React from 'react'

import { Flex } from 'components/Flex'
import { Input } from 'components/Input'
import { Text } from 'components/Text'

interface FieldProps {
  label: string
  placeholder?: string
  defaultValue?: string
  inputRef?: React.MutableRefObject<HTMLInputElement>
  onInput?: () => void
}

export const Field: React.FC<FieldProps> = props => {
  return (
    <Flex direction="row" gap={10}>
      <Text bold={true} fontSize="16pt" padding="0 5px 5px 5px">
        {props.label}
      </Text>
      <Input
        type="text"
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        ref={props.inputRef}
        onInput={props.onInput}
      />
    </Flex>
  )
}
