import Burger from 'src/UI/molecules/Burger'

import Home from 'src/UI/organisms/Home'
import Specialties from 'src/UI/organisms/Specialties';
import Menu from 'src/UI/organisms/Menu';

import { Container } from './styles'

function LandingPage() {
  return (
    <Container>
      <Burger />
      <Home />
      <Specialties />
      <Menu />
    </Container>
  );
}

export default LandingPage
