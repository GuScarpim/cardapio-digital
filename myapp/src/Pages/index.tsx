import Button from '../UI/atoms/Button'
import Burger from '../UI/molceules/Burger'

import { Container } from './styles'

function LandingPage() {
  return (
    <Container>
      <Burger />
      <Button text='Cadastrar-se' />
    </Container>
  )
}

export default LandingPage
