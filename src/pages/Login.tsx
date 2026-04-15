import styled from "styled-components";

const AreaLogin = styled.div`
    background: #666;
`

const LoginImagem = styled.div`
    background-image: url(/login-imagem.png);
    background-size: cover;
    height: 100vh;
    width: 50vw;
`

function Login() {
  return (
    <>
     <AreaLogin>LOGIN</AreaLogin>
     <LoginImagem/>
    </>
  )
}

export default Login
