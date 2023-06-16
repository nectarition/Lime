import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = (props) => {
  return (
    <Container>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Container>
  )
}

export default DefaultLayout

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Main = styled.div`
  padding: 40px 25%;

  @media screen and (max-width: 840px) {
    padding: 20px;  
  }
`
