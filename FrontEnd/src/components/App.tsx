import { FormEvent, useState } from 'react'

// imgs
import banner from '../../public/assets/banner.jpg'

// Styles
import * as S from './styles'

// api 
import { api } from '../services/api';
import { InfoBot } from '../pages/infoBot';
import InfoMid from '../pages/infoMid';
import { InfoTop } from '../pages/infoTop';

const App = () => {
  return (
    <S.Container >
      <InfoTop />
      <InfoMid />
      <InfoBot />
    </S.Container>)
}

export default App
