import React from 'react'

import { TemplateProvider } from './TemplateContext'
import { ThemesProvider } from './ThemeContext'

interface Props {
  children?: React.ReactNode
}

const AppContext: React.FC<Props> = ({ children }) => {
  return (
    <ThemesProvider>
      <TemplateProvider>{children}</TemplateProvider>
    </ThemesProvider>
  )
}

export default AppContext
