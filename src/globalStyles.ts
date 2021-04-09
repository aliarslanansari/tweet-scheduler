import { createGlobalStyle } from 'styled-components'
import colors from './theme/colors'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${colors.backgroundColor};
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }
`

export default GlobalStyle
