import styled from "styled-components";

export const Container = styled.main`
    #hero1 ,#hero2 , #hero3 , #hero4{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    
    #logo {
        width: 80%;
    }
    #planos{
        width: 50%;
    }

    @media (max-width: 900px){
        #logo ,#planos{width: 60%}
    }

    @media (max-width: 650px){
        #logo{width: 50%}
    }
`