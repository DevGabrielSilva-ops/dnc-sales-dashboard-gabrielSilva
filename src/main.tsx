import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle} from './styles'
import { AppThemeProvider } from './Context/appThemeContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <GlobalStyle/>
      <App />
    </AppThemeProvider >
  </StrictMode>,
)
