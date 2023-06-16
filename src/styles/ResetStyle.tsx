import { createGlobalStyle } from 'styled-components'

const ResetStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p,
  fieldset {
    margin: 0;
    padding: 0;
  }

  fieldset {
    border: none;
  }
`

export default ResetStyle
