import styled from "styled-components";

export const Container = styled.div`


    img{
        height: 150px;
        width: 150px;
        align-self: center;
    }

    .border{
        width: 100%;
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