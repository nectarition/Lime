import { createGlobalStyle } from 'styled-components'

import resetStyle from './Reset'
import colors from './Colors'

const GlobalStyle = createGlobalStyle`
  ${resetStyle}
  ${colors}
  
  * {
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.75em; }
  h3 { font-size: 1.5em; }
  h4 { font-size: 1.25em; }
  h5 { font-size: 1em; }
  h6 { font-size: 0.9em; }

  a:link, a:visited {
    color: var(--secondary-color);
  }

  .code {
    font-family: 'Noto Sans Mono', monospace;
  }
`

export default GlobalStyle
