import styled from 'styled-components'

export interface ButtonStyleProps {
  size?: number
}

export const ButtonStyle = styled.div<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    font-size: ${props => `${props.size}px`};
    cursor: pointer;
  }

  .add-button:hover {
    color: rgb(0, 202, 27);
  }

  .delete-button:hover {
    color: rgb(235, 0, 0);
  }

  .update-button:hover {
    color: rgb(0, 89, 255);
  }

  .download-button:hover {
    color: rgb(130, 30, 140);
  }
`
