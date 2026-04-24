import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, temaEscuro} from './styles'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={temaEscuro}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
