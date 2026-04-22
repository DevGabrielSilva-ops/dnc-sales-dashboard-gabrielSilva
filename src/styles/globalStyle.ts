import { createGlobalStyle } from "styled-components";
import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    appBackground: string
    appColor: string
    appDefaultStroke: string
    appLogo: string
    appSkeletonFrom: string
    appSkeletonTo:string
    buttons: {
         alert: string
         alertColor:string
         alertHover:string
         disabled:string
         disabledColor:string
         primary: string
         primaryColor:string
         primaryHover:string
    }

    card:{
        alert:string
        background:string
        border:string
        sucess:string
        warning:string
    }

    textInput: {
        active: string
        activeColor:string
        borderColor:string
        disabled:string
        disabledBorderColor:string
        disabledColor:string
        placeholderColor: string
    }

    typographies: {
        error: string
        subtitle: string
        sucess:string
    }
  }
}
export const GlobalStyle = createGlobalStyle` 
    body, html {
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    }

    h1,h2,p,ul,li, figure{
        margin: 0;
        padding: 0;
            
    }
`