import Title from 'src/UI/atoms/Titles';
import SubTitle from 'src/UI/atoms/SubTitles'

import Button from 'src/UI/atoms/Button';

import Hamburger from 'src/Assets/home/home-burger.png'

import {
  Container,
  Card,
  ContentText,
  ContentImg,
  Img
} from './styles'

function Home() {
  return (
    <Container>
      <Card>
        <ContentText>
          <Title title='Nome do lanche em destaque' />
          <SubTitle subTitle='Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Voluptas Accusamus Tempore Temporibus Rem Amet Laudantium Animi Optio Voluptatum. Natus Obcaecati Unde Porro Nostrum Ipsam Itaque Impedit Incidunt Rem Quisquam Eos!' />
          <Button margin='30px 0px' text='Adicionar' />
        </ContentText>
        <ContentImg>
          <Img src={Hamburger} alt='Hamburger' />
        </ContentImg>
      </Card>
    </Container>
  );
}

export default Home