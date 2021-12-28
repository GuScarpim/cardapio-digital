import Title from '../../molecules/Titles'
import SubTitle from '../../molecules/SubTitles'

import Button from '@atoms/Button'

import { Container, Card, GridText, GridImg } from './styles';

function Home() {
  return (
    <Container>
      <Card>
        <GridText>
          <Title title='Nome do lanche em destaque' />
          <SubTitle subTitle='Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Voluptas Accusamus Tempore Temporibus Rem Amet Laudantium Animi Optio Voluptatum. Natus Obcaecati Unde Porro Nostrum Ipsam Itaque Impedit Incidunt Rem Quisquam Eos!' />
          <Button text='Adicionar' />
        </GridText>
        <GridImg>
        </GridImg>
      </Card>
    </Container>
  );
}

export default Home