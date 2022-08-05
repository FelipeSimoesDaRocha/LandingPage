import { useState } from 'react'
// imgs
import banner from '../../public/assets/banner.jpg'// Styles
import * as S from './styles'

// Antd
import { Button, Divider } from 'antd'

const App = () => {
  return (
    <S.Container >
      <S.Section id="hero1">
        <img src={banner} />
        <h1>SulAmeria</h1>
        <h2>Possui Mei ou Cnpj e presisa de um plano de saude confíavel?</h2>
        <Divider />
        <p>Contrate hoje um dos planos da sul América saúde empresarial e pague 40% mais barato.</p>
        <Button>
          Entrar em contato
        </Button>
      </S.Section>

      <S.Section id="hero2">
        <Button >
          Entrar em contato
        </Button>
      </S.Section>

      <S.Section id="hero3">
        <Button >
          Voltar ao Formulario
        </Button>
      </S.Section>

    </S.Container>)
}

export default App
