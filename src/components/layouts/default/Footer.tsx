import styled from 'styled-components'

const Footer: React.FC = () => (
  <Container>
    &copy; 2023 Nectarition
  </Container>
)

export default Footer

const Container = styled.footer`
  padding: 40px 25%;
  padding-bottom: calc(40px + env(safe-area-inset-bottom));

  background-color: #f0f0f0;
  @media screen and (max-width: 840px) {
    padding: 10px;
    padding-bottom: calc(10px + env(safe-area-inset-bottom));
  }
`
