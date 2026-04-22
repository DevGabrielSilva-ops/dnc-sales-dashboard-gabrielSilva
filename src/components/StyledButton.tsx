import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";
import { pxParaRem } from "@/utils";

type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const StyledButton = styled.button<StyledButtonProps>`
 border-radius: ${pxParaRem(8)};
 border: none;
 box-sizing: border-box;
 cursor: pointer;
 font-size: ${pxParaRem(16)};
 font-weight: bold;
 height: ${pxParaRem(50)};
 padding: 0 ${pxParaRem(16)};
 transition: background-color 0.3s;
 width: 100%;

 &.primary{
     background-color: ${(props) => props.theme.buttons.primary};
     color: ${(props) => props.theme.buttons.primaryColor};

     &:hover{
        background-color: ${(props) => props.theme.buttons.primaryHover};
     }
 }

 &.alert{
     background-color: ${(props) => props.theme.buttons.alert};
     color: ${(props) => props.theme.buttons.alertColor};

     &:hover{
        background-color: ${(props) => props.theme.buttons.alertHover};
     }
 }

 &.borderless-alert{
     background-color: transparent;
     color: ${(props) => props.theme.buttons.alert};
     height: 0;
     padding: 0;

     &:hover{
       color: ${(props) => props.theme.buttons.alertHover};
     }
 }

 &:disabled{
     background-color: ${(props) => props.theme.buttons.disabled};
     color: ${(props) => props.theme.buttons.disabledColor};
     cursor: not-allowed;
 }
`;