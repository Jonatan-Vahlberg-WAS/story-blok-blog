import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {ThemeProvider} from "styled-components"
import theme from '../utils/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
