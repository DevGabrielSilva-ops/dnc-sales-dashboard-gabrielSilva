
import { Box, Container, Grid } from "@mui/material";
import { BannerImagem, FormularioComponente, StyledH1, StyledP, StyledUl, Logo   } from "@/components"
import { pxParaRem } from "@/utils";

function Registrar() {
  return (
    <>
      <Box>
        <Grid container>

          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ alignItems: "center", display: "flex", height: "100vh" }}
          >
            <Container maxWidth="sm">
              <Box sx={{marginBottom: pxParaRem(24)}}>
                <Logo height={41} width={100}/>
            </Box>
            <Box sx={{marginBottom: pxParaRem(24)}}>
                <StyledH1>Faça seu cadastro</StyledH1>
                <StyledP>Primeiro, diga-nos quem é você</StyledP>
                <StyledUl>
                  <li>Entre 8 e 16 caracteres;</li>
                  <li>Pelo menos uma letra maiúscula;</li>
                  <li>Pelo menos um caractere especial;</li>
                  <li>Pelo menos um número;</li>
                </StyledUl>
            </Box>
              
              <FormularioComponente inputs={[
                { type: 'email', placeholder: 'Email' },
                { type: 'password', placeholder: 'Senha' },
              ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
                ]}

                message={{
                  msg: 'Erro!!!',
                  type: 'error',
                }}
              />

            </Container>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <BannerImagem />
          </Grid>

        </Grid>
      </Box>


    </>
  )
}

export default Registrar
