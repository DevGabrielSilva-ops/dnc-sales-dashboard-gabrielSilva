import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import { pxParaRem } from "@/utils";

type StyledInputProps = InputHTMLAttributes<HTMLInputElement>;

export const StyledInput = styled.input<StyledInputProps>`
 background-color: ${(props) => props.theme.textInput.active};
 color: ${(props) => props.theme.textInput.activeColor};
 border-radius: ${pxParaRem(8)};
 border: ${pxParaRem(1)} solid ${(props) => props.theme.textInput.borderColor};
 box-sizing: border-box;
 height: ${pxParaRem(40)};
 font-size: ${pxParaRem(14)};
 font-weight: 500;
 padding: ${pxParaRem(8)} ${pxParaRem(16)};
 transition: background-color 0.3s;
 width: 100%;

 &:disabled{
     background-color: ${(props) => props.theme.textInput.disabled};
     border: ${pxParaRem(1)} solid ${(props) => props.theme.textInput.disabledBorderColor};
     color: ${(props) => props.theme.textInput.disabledColor};
     cursor: not-allowed;
 }
`;