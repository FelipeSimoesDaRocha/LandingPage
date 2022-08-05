import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --orange: linear-gradient( 90deg,#fc5a17, #df4026);
        --blue: #0c305c;
        --white: #ffffff;
        --grap: #d3d3d3a6;
        --border-radius: 16px;
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
        line-height: 1.15;
        
        @media (max-width:1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
    
    body {
        background-color: var(--white);
        -webkit-font-smoothing:antialiased;
    }

    body,input,textarea,button{
        font-family: 'Poppins',sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong,p{
        font-weight: 600 !important;
        color: var(--azul);
    }
`

export default GlobalStyle