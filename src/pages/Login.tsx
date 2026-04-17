
import { Box, Container, Grid } from "@mui/material";
import { BannerImagem } from "@/components";

function Login() {
  return (
    <Box>
      <Grid container>
        
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{ alignItems: "center", display: "flex", height: "100vh" }}
        >
          <Container maxWidth="sm">
            <h1>LOGIN</h1>
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
  );
}

export default Login;