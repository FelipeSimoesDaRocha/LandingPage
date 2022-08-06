import { FormEvent, useState } from 'react'

import { Layout } from 'antd';

// Styles
import * as S from './styles';

const { Header, Footer, Sider, Content } = Layout;
// Pages
import { InfoBot } from '../pages/infoBot';
import { InfoMid } from '../pages/infoMid';

import { Top } from '../pages/infoTop';
import { Bot } from '../pages/Footer';

const App = () => {
  return (
    <S.Container >
      <Layout>
        <Header>
          <Top />
        </Header>

        <Content>
          <InfoMid />
          <InfoBot />
        </Content>

        <Footer>
          <Bot />
        </Footer>
      </Layout>
    </S.Container>

  )
}

export default App
