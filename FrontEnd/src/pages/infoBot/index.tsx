import { Divider } from 'antd'
import { FormEvent, useState } from 'react'

// Imgs
import banner from '../../../public/assets/banner.jpg'
import Button from '../../components/button/Button'

// Styles
import * as S from './styles'

// Antd

export const InfoBot = () => {
  return (
    <S.Container id="hero3">
      <Divider />
      <h1>Gostou da Sul América e quer ter mais informações</h1>
      <h2>Então preencha o formulário para que um de nosssos consultores porram te direcionar a melhor opção para você hoje!</h2>
      <p>A Rossi Consultoria te dá toda assistência necessária nesse processo!</p>
      <Button name={'Entrar em contato'} type="primary" />
    </S.Container>
  )
}
