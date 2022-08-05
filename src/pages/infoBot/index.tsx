// Styles
import * as S from './styles'

// Antd
import { Divider } from 'antd'

// Imgs
import banner from '../../../public/assets/banner.jpg'

// components
import Button from '../../components/button/Button'

export const InfoBot = () => {
  return (
    <S.Container id="hero3">
      <S.Content>
        <Divider />

        <h1>Gostou da Sul América e quer <br />
          ter mais informações?
        </h1>

        <h2>Então preencha o formulário para  <br />
          que um de nosssos consultores <br />
          porram te direcionar a <br />
          melhor opção para você hoje!
        </h2>

        <p>A Rossi Consultoria te dá toda assistência  <br />
          necessária nesse processo!
        </p>
        <Button name={'Voltar ao Formulário'} type="primary" />
      </S.Content >
    </S.Container>
  )
}
