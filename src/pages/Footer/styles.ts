import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 0;
    background-image: linear-gradient(#092dab, #004db3);
    color: var(--white);

    img{
        width: 150px;
        height: auto;
        align-self: center;
    }
`

export const Content = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
 
    .ant-divider{
        margin: 1rem 0;
        border:1px solid var(--white);
    }
`