import Title from 'src/UI/atoms/Titles'

import InputSearch from 'src/UI/atoms/InputSearch'
import InputFilter from 'src/UI/atoms/InputFilter';
import Product from 'src/UI/molecules/Product';

import { options } from './menu'

import { Container, Content} from './styles'

function Menu() {
  return (
    <Container>
      <Title title='Menu' />

      <Content>
        <InputSearch placeholder='Pesquisar por...' />
        <InputFilter placeholder='Filtrar por...' options={options} />
      </Content>
      <Product />
    </Container>
  );
}

export default Menu;
