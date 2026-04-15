import styled from "styled-components";

const AreaRegistrar = styled.div`
    background: #333;
`

const RegistrarImagem = styled.div`
    background-image: url(/login-imagem.png);
    background-size: cover;
    height: 100vh;
    width: 50vw;
`

function Registrar() {
  return (
    <>
     <AreaRegistrar>Registrar</AreaRegistrar>
     <RegistrarImagem/>
    </>
  )
}

export default Registrar
