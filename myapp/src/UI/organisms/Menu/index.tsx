import Title from 'src/UI/atoms/Titles'

import InputSearch from 'src/UI/atoms/InputSearch'

import { Container, Content} from './styles'

function Menu() {
  return (
    <Container>
      <Title title='Menu' />

      <Content>
        <InputSearch placeholder='Pesquisar por...' />
      </Content>
    </Container>
  );
}

export default Menu;
