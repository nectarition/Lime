import styled from 'styled-components'

const Header: React.FC = () => (
  <Container>Nectarition Lime</Container>
)

export default Header

const Container = styled.header`
  padding: 10px;
  background-color: #404040;
  border-bottom: 2px solid var(--primary-color);
  color: #ffffff;
`
