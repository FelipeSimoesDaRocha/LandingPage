// Styles
import * as S from './styles'

// Antd
import { Divider } from 'antd'

import banner from '../../../public/assets/logoFooter.png'

export const Footer = () => {
  return (
    <S.Container id="Footer">
      <img src={banner} />

      <p>@All Rights . Rossi
        Consultoria em seguros LTDA
        CNPJ 467455111/0001-28
      </p>

      <strong>Horário de Atendimento</strong>
      <p>Segunda a Sexta 9h00 ás 21:00</p>

      <Divider />

      <p>Copyright @ 2022,Rossi Saúde. Todos os direitos reservados.
        Criado por Creativ&xperience
      </p>
    </S.Container>
  )
}
