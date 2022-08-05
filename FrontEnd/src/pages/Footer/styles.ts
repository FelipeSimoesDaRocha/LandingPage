import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(#092dab, #004db3);
    color: var(--white);

    .ant-divider{
        border:1px solid var(--white);
    }

    img{
        height: 150px;
        width: 150px;
    }
`