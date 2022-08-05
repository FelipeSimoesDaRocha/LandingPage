import * as S from './styles'

type MainProps = {
    children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
    return (
        <S.Container>
            <h1>opa</h1>
        </S.Container>
    )
}
export default Main