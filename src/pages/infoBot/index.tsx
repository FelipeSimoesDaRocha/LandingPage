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
      <Divider />
      <h1>Gostou da Sul América e quer ter mais informações?</h1>
      <h2>Então preencha o formulário para que um de nosssos consultores porram te direcionar a melhor opção para você hoje!</h2>
      <p>A Rossi Consultoria te dá toda assistência necessária nesse processo!</p>
      <Button name={'Voltar ao Formulário'} type="primary" />
    </S.Container>
  )
}
