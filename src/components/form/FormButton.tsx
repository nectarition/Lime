import styled from 'styled-components'

const FormButton = styled.button<{ color?: 'default' }>`
  width: 100%;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  background-color: ${props => props.color === 'default'
    ? `#e0e0e0`
    : 'var(--primary-color)'};

  &:disabled {
    background-color: #c0c0c0;
  }
`

export default FormButton
