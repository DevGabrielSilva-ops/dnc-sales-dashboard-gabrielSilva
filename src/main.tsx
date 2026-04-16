import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { temaClaro,temaEscuro,GlobalStyle } from './styles'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={temaClaro}>
       <GlobalStyle/>
       <App />
    </ThemeProvider>
  </StrictMode>,
)
