import Burger from '../UI/molceules/Burger'
import Home from '../UI/organisms/Home';

import { Container } from './styles'

function LandingPage() {
  return (
    <Container>
      <Burger />
      <Home />
      {/* <Button text='Cadastrar-se' /> */}
    </Container>
  );
}

export default LandingPage
