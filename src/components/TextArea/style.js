import styled from 'styled-components';

export const TextAreaStyle = styled('textarea')`
  width: 100%;
  background-color: transparent;
  color: #c4c4c4;
  border: 1px solid rgb(100, 100, 100);
  border-radius: 0.25rem;
  outline: none;
  resize: none;
  ::placeholder {
    color: #c4c4c4;
  }
`;
