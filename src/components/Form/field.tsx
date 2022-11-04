import React, { memo, useCallback, useRef } from 'react'

import { Flex } from 'components/Flex'
import { Input } from 'components/Input'
import { Text } from 'components/Text'

interface FieldProps {
  label: string
  placeholder?: string
  defaultValue?: string
  onInput?: (text: string) => void
}

export const FieldComponent: React.FC<FieldProps> = props => {
  const inputRef = useRef<HTMLInputElement>()

  const setField = useCallback(() => {
    props.onInput(inputRef.current.value)
  }, [props])

  return (
    <Flex direction="row" gap={10}>
      <Text bold={true} fontSize="16pt" padding="0 5px 5px 5px">
        {props.label}
      </Text>
      <Input
        type="text"
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        ref={inputRef}
        onInput={setField}
      />
    </Flex>
  )
}

export const Field = memo(FieldComponent)
