// Styles
import * as S from './styles'

// Imgs
import bannerTop from '../../../public/assets/Top/bannerTop.png'

// components
import Button from '../../components/button/Button'

export const Top = () => {
  return (
    <S.Container id="hero1">
      <img src={bannerTop} />
      <S.Content>
        <h1>SulAmerica</h1>
        <h2>Possui Mei ou Cnpj e presisa de um plano de saude confíavel?</h2>
        <p>Contrate hoje um dos planos da sul América saúde empresarial e pague 40% mais barato.</p>
        <Button name={'Entrar em contato'} type="primary" />
      </S.Content>
    </S.Container>
  )
}


