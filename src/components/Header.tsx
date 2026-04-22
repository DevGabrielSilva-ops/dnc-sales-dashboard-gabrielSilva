import styled from "styled-components";
import { Logo } from "@/components";
import { Link } from "react-router-dom";
import { pxParaRem } from "@/utils";
import { Avatar, Box, Container } from "@mui/material";


export const StyledHeader = styled.header`
    background-image: ${(props) => props.theme.appBackground};
    border-bottom: ${pxParaRem(1)} solid ${(props) => props.theme.appDefaultStroke};
    margin-bottom: ${pxParaRem(37)}
    width: 100%;
`

function Header() {
    return(
        <StyledHeader>
            <Container maxWidth="lg">
                <Box sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: pxParaRem(64)
                }}>
                    <Link to="/home">
                        <Logo height={30} width={73}></Logo>
                    </Link>

                    <Link to="/perfil"> 
                        <Avatar alt="DNC Avatar" src="/dnc-avatar.png" sx={{width: pxParaRem(40), height: pxParaRem(40)}} />
                    </Link>
                </Box>
            </Container>
        </StyledHeader>
    )
}

export default Header
