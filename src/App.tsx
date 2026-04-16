import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import { Login,Registrar,Home,Leads,Perfil } from "./pages"
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Registrar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/leads" element={<Leads/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
      </Routes>
    </Router>
  )
}

export default App
