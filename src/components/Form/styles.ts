import styled from 'styled-components'

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  gap: 10px;

  @media (max-width: 1120px) {
    width: 90%;
  }
`
