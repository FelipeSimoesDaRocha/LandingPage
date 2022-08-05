import { FormEvent } from 'react'

// Styles
import * as S from './styles'

// Antd
import { Col, Divider, Form, Input, Row } from 'antd'

// Imgs
import banner from '../../../public/assets/banner.jpg'

// components
import Button from '../../components/button/Button'

// Api
import { api } from '../../services/api'

function onFinish(event: FormEvent) {
  debugger
  event.preventDefault();

  const data = {};

  api.post('/contact', data)
}

export const InfoMid = () => {
  return (
    <S.Container id="hero2">
      <Form>
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
        <Button onClick={onFinish} name={'Entrar em contato'} type="secondary" />
      </Form>
    </S.Container>
  )
}