import styled from 'styled-components'

const FormInput = styled.input<{ size?: number }>`
  width: 100%;
  padding: 5px;
  font-size: ${props => props.size ?? 16}px;

  text-align: center;
  
  border: 2px solid #808080;
  border-radius: 0;
  outline: none;

  &:focus {
    border: 2px solid var(--primary-color);
  }
`

export default FormInput
