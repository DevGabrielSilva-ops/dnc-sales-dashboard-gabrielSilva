import styled from "styled-components";
import { pxParaRem } from "@/utils";


export const CardComponent = styled.div`
    background-color: ${(props) => props.theme.card.background};
    border: ${pxParaRem(1)} solid ${(props) => props.theme.card.border};  
    border-radius: ${pxParaRem(8)};
    box-sizing: border-box;
    padding: ${pxParaRem(20)};
    width: 100%
    
    &.alert{
        background-color: ${(props) => props.theme.card.alert};
        border-color: ${(props) => props.theme.card.alert};
    }

    &.success {
        background-color: ${(props) => props.theme.card.sucess};
        border-color: ${(props) => props.theme.card.sucess};
    }

    &.warning {
        background-color: ${(props) => props.theme.card.warning};
        border-color: ${(props) => props.theme.card.warning};
    }
        a {
            color: inherit;
            text-decoration: none; 
        }
   
`

