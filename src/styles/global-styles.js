import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding:0;
}

html {
  font-size:62.5%
}

#root{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
}
body{
  min-height: 100vh;
  font-size:1.6rem;
  font-family: 'Kumbh Sans', sans-serif;
  }
a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  }
`
