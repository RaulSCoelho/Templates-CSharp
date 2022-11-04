import React, { memo, useCallback, useRef } from 'react'

import { AddButton, DeleteButton } from 'components/Buttons'
import { Flex } from 'components/Flex'
import { Input } from 'components/Input'
import { Text } from 'components/Text'
import { useAddType } from 'hooks/useAddType'
import { useRemoveType } from 'hooks/useRemoveType'
import { useTemplate } from 'hooks/useTemplate'

export const Types: React.FC = memo(() => {
  const { template } = useTemplate()
  const { addType } = useAddType()
  const typeRef = useRef<HTMLInputElement>()

  const add = useCallback(() => {
    addType(typeRef.current.value)
    typeRef.current.value = ''
  }, [addType])

  return (
    <Flex direction="row" alignItems="start" gap={10}>
      <Text bold={true} fontSize="16pt" padding="0 5px 5px 5px">
        Tipos:
      </Text>
      <Flex justifyContent="start" wrap="wrap" gap={10}>
        {template.template.classifications.map((type, i) => {
          return <Type type={type} typeIndex={i} key={i} />
        })}
        <Flex width="auto" direction="row">
          <Input
            type="text"
            placeholder="tipos da aplicação"
            ref={typeRef}
            textAlign="center"
          />
        </Flex>
        <AddButton size={25} onClick={add} />
      </Flex>
    </Flex>
  )
})

interface TypeProps {
  typeIndex: number
  type: string
}

const Type: React.FC<TypeProps> = memo(props => {
  const { removeType } = useRemoveType()

  const remove = useCallback(() => {
    removeType(props.typeIndex)
  }, [props.typeIndex, removeType])

  return (
    <Flex width="auto" direction="row">
      <Input type="text" value={props.type} textAlign="center" readOnly />
      <DeleteButton size={20} onClick={remove} />
    </Flex>
  )
})
