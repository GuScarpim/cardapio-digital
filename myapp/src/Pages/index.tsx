import Button from '../UI/atoms/Button'
import Burger from '../UI/molceules/Burger'

import { Container } from './styles'

function LandingPage() {
  return (
    <Container>
      <Button text='Cadastrar-se' />
      <Burger />
    </Container>
  )
}

export default LandingPage
