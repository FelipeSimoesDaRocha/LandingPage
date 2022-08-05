import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --orange: #e14125;
        --azul: #0c305c;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body #root {
        height: 100%;
    }
    
    html{
        @media (max-width:1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
    body {
        background-color: #f8fdff;
        -webkit-font-smoothing:antialiased;
    }

    body,input,textarea,button{
        font-family: 'Poppins',sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600 !important;
        color: var(--azul);
    }

    button {
       cursor: pointer;
       border: none;
    }
    
    [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`

export default GlobalStyle