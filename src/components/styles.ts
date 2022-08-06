import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    #hero1 ,#hero2 , #hero3 , #hero4{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    }

    #hero4{
        background-image: linear-gradient(#092dab, #004db3);
        color: var(--white);
        margin-bottom: 0;
    }
`