import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 2rem;
    color: var(--blue);

`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .ant-divider{
        border:1px solid var(--grap);
        width: 50%;
    }
    span{
        font-weight: 500;
        text-shadow: 0px 0px 1px #0c305cbf;
    }

    h3{
        padding: 6px;
    }

    .ant-row{
        margin: 1rem 0;
    }
    .showContent{
        p{
            font-size: 20px;
        }

        b{
            font-weight: 700;
            text-shadow: 0px 0px 1px #0c305cbf;
        }
    }
`