// Styles
import * as S from './styles'

// Imgs
import banner from '../../../public/assets/Top/banner.png'
import logo from '../../../public/assets/Top/logo.png'
import planos from '../../../public/assets/Top/planos.png'

// components
import Button from '../../components/button/Button'
import { Col, Divider, Row } from 'antd'

export const Top = () => {
  return (
    <S.Container id="hero1">
      <img src={banner} />
      <S.Content>
        <Row className='showContent'>
          <Col span={24}>
            <img src={logo} id='logo' />
            <p>
              <span>Possui <b>Mei ou Cnpj</b> e</span>
              <br />
              <span> presisa de um plano de</span>
              <br />
              <b>saúde confíavel?</b>
            </p>
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col span={24}>
            <p>
              <span>Contrate hoje um dos planos</span>
              <br />
              <span> da sul América saúde</span>
              <br />
              <span>empresarial e pague 40% </span>
              <br />
              <span>  mais barato.</span>
            </p>
          </Col>
        </Row>

        <Button name={'Entrar em contato'} type="primary" />

        <Row>
          <Col span={24}>
            <h3>Valores Especias</h3>
            <p>
              <span>É possivel ter um grande desconto</span>
              <br />
              <span>no seu plano usando o CNPJ ou</span>
              <br />
              <span>um endereço no interior ou litoral.</span>
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <h3>Rede Credenciada</h3>
            <p>
              <span>Atendimento nos principais </span>
              <br />
              <span>Hospitais, Laboratórios</span>
              <br />
              <span>e médicos.</span>
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={8}>
            <h3>Principal companhia de saúde</h3>
            <p>
              <span> A Sul América é refência a </span>
              <br />
              <span>127 anos,e ocupa o posto de plano</span>
              <br />
              <span> de saúde mais tradicional do país</span>
              <br />
              <span>e mais bem avaliado pelos</span>
              <br />
              <span>seus inúmeros beneficiários.</span>
            </p>
          </Col>
        </Row>
        <img src={planos} id='planos' />
      </S.Content>
    </S.Container>
  )
}


