// Styles
import * as S from './styles'

// Imgs
import banner from '../../../public/assets/banner.jpg'

// components
import Button from '../../components/button/Button'

export const InfoTop = () => {
  return (
    <S.Container id="hero1">
      <img src={banner} />
      <h1>SulAmeria</h1>
      <h2>Possui Mei ou Cnpj e presisa de um plano de saude confíavel?</h2>
      <p>Contrate hoje um dos planos da sul América saúde empresarial e pague 40% mais barato.</p>
      <Button name={'Entrar em contato'} type="primary" />
    </S.Container>
  )
}

