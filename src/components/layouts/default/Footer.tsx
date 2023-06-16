import styled from 'styled-components'

const Footer: React.FC = () => (
  <Container>
    <Logo>
      <a href="https://nectarition.jp">
        <LogoImage src="https://nectarition.jp/logo/common.png" />
      </a>
    </Logo>
    <Copyright>
      &copy; 2023 Nectarition
    </Copyright>
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

const Logo = styled.section`
  margin-bottom: 10px;
`
const LogoImage = styled.img`
  height: 16px;
`

const Copyright = styled.section`
  color: #808080;
`
