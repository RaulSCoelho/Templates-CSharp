import React, { useContext } from 'react'

import { Flex } from 'components/Flex'
import { Form } from 'components/Form'
import { Switch } from 'components/Switch'
import { Template } from 'components/Template'
import { Text } from 'components/Text'
import { ThemeContext } from 'context/ThemeContext'
import { shade } from 'polished'

export const Home: React.FC = () => {
  const { theme, onToggleTheme } = useContext(ThemeContext)

  return (
    <Flex>
      <Text bold={true}>{theme.title}</Text>
      <Switch
        switchWhen={theme.title !== 'Light Mode'}
        onClick={onToggleTheme}
        width={40}
        height={20}
        handleDiameter={16}
        offColor={shade(0.1, theme.colors.background)}
      />
      <br />
      <Flex direction="row" alignItems="start" height="auto">
        <Form />
      </Flex>
      <br />
      <Template />
    </Flex>
  )
}
