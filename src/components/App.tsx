import { FormEvent, useState } from 'react'

// Styles
import * as S from './styles';

// Pages
import { InfoBot } from '../pages/infoBot';
import { InfoMid } from '../pages/infoMid';
import { InfoTop } from '../pages/infoTop';
import { Footer } from '../pages/Footer';

const App = () => {
  return (
    <S.Container >
      <InfoTop />
      <InfoMid />
      <InfoBot />
      <Footer />
    </S.Container>

  )
}

export default App
