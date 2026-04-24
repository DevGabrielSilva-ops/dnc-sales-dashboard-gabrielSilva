import { Header,CardComponent,StyledButton } from "@/components"
import { useContext } from "react"
import { AppThemeContext } from "@/Context/appThemeContext"
function Perfil() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
     <Header />
     <CardComponent>
        <StyledButton className='primary' onClick={themeContext?.toggleTheme}>
          Trocar para Tema {themeContext?.appTheme == 'light' ? 'Claro' : 'Escuro '}
        </StyledButton>
     </CardComponent>
    </>
  )
}

export default Perfil
