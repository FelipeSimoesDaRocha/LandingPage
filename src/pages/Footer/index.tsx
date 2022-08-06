// Styles
import * as S from './styles'

// Antd
import { Divider } from 'antd'

// Imgs
import banner from '../../../public/assets/Footer/logo.png'


export const Bot = () => {
  return (
    <S.Container id="hero4">
      <img src={banner} />

      <S.Content>
        <p>@All Rights . Rossi <br />
          Consultoria em seguros LTDA<br />
          CNPJ 467455111/0001-28
        </p>
        <br />
        <strong>Horário de Atendimento</strong>
        <p>Segunda a Sexta 9h00 ás 21:00</p>

        <Divider />

        <p>Copyright @ 2022,Rossi Saúde. Todos os direitos reservados.<br />

          Criado por Creativ&xperience
        </p>
      </S.Content>
    </S.Container>
  )
}
