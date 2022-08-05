import { FormEvent, useState } from 'react'

// Imgs
import banner from '../../../public/assets/banner.jpg'
import Button from '../../components/button/Button'

// Styles
import * as S from './styles'

// Antd

export const InfoBot = () => {
  return (
    <S.Container >
      <S.Container id="hero3">
        <Button name={'Entrar em contato'} type="primary" />
      </S.Container>
    </S.Container>)
}
