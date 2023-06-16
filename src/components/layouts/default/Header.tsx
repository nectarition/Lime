import styled from 'styled-components'

const Header: React.FC = () => (
  <Container>Nectarition Lime</Container>
)

export default Header

const Container = styled.header`
  padding: 10px 25%;
  background-color: #f0f0f0;
  @media screen and (max-width: 840px) {
    padding: 10px;
  }

  background-color: #404040;
  border-bottom: 2px solid var(--primary-color);
  color: #ffffff;
`
