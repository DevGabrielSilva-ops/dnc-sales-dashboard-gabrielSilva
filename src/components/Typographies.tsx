import styled from "styled-components";
import { TypographiesProps } from "@/types";
import { pxParaRem } from "@/utils";


export const StyledH1 = styled.h1<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => pxParaRem(props.size || 24)};
    font-weight: ${(props) => pxParaRem(props.weight || 600)};
    letter-spacing: ${pxParaRem(-1)};
    line-height: ${(props) => pxParaRem(props.lineheight || 36)}
`

export const StyledH2 = styled.h1<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => pxParaRem(props.size || 16)};
    font-weight: ${(props) => pxParaRem(props.weight || 600)};

    line-height: ${(props) => pxParaRem(props.lineheight || 24)}
`

export const StyledP = styled.p<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => pxParaRem(props.size || 16)};
    font-weight: ${(props) => pxParaRem(props.weight || 400)};
    line-height: ${(props) => pxParaRem(props.lineheight || 24)}
`

export const StyledSpan= styled.span<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => pxParaRem(props.size || 16)};
    font-weight: ${(props) => pxParaRem(props.weight || 400)};
    line-height: ${(props) => pxParaRem(props.lineheight || 24)}
`

export const StyledUl= styled.ul<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => pxParaRem(props.size || 16)};
    font-weight: ${(props) => pxParaRem(props.weight || 400)};
    line-height: ${(props) => pxParaRem(props.lineheight || 24)};
    list-style-position: inside;
    li{
        list-style-position: outside;
        margin-left: ${pxParaRem(15)}
    }
`



