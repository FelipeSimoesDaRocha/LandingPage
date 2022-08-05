import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    background-image: linear-gradient(#092dab, #004db3);

    img{
        height: 150px;
        width: 150px;
    }
`

export const Content = styled.div`
    padding: 2rem 0;
    color: var(--white);
    text-align: center;
 
    .ant-divider{
        margin: 1rem 0;
        border:1px solid var(--white);
    }
`