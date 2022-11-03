import styled from 'styled-components'

export interface StyleProps {
  fontSize?: string
  padding?: string
  bold?: boolean
}

export const Text = styled.p<StyleProps>`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.fontSize || '12pt'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  padding: ${props => props.padding};
`
