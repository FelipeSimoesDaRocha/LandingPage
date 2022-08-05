import { FormEvent, useState } from 'react'
// imgs
import banner from '../../public/assets/banner.jpg'// Styles
import * as S from './styles'


// Antd
import { Button, Col, Divider, Form, Input, Row } from 'antd'

import { api } from '../services/api';


function onFinish(event: FormEvent) {
  debugger
  event.preventDefault();

  const data = {};

  api.post('/contact', data)
}



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
        <Form onFinish={onFinish}>
          <Row gutter={[24, 24]} >
            <Col md={24} lg={24} sm={24}>
              <Form.Item>
                <Input placeholder='Nome e sobrenome'></Input>
              </Form.Item>

              <Form.Item>
                <Input placeholder='Idade'></Input>
              </Form.Item>

              <Form.Item>
                <Input placeholder='Telefone ou WhathsApp'></Input>
              </Form.Item>
            </Col>
          </Row>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#0c305c", color: "#fff" }}
          >Entrar em contato</Button>
        </Form>
      </S.Section>

      <S.Section id="hero3">
        <Button >
          Voltar ao Formulario
        </Button>
      </S.Section>

    </S.Container>)
}

export default App
