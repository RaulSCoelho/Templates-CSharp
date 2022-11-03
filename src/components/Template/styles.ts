import { FlexStyle } from 'components/Flex/styles'
import styled from 'styled-components'

export const TemplateStyle = styled(FlexStyle)`
  justify-content: start;
  align-items: start;
  width: 50%;

  textarea {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    width: 100%;
    height: 100%;
    resize: none;
    border: 0;
    font-size: 12pt;
  }

  @media (max-width: 1120px) {
    width: 90%;
  }
`
