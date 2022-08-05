import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;

  
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--smoke);
    text-align: center;
   
    .ant-divider{
        margin: 1rem 0;
        border:1px solid var(--grap);
    }
`