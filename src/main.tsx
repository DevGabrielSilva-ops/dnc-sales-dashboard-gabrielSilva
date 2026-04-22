import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, temaClaro} from './styles'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={temaClaro}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
