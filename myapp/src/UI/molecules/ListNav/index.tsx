import { Ul, Li, Logo, Content } from './styles';

type Props = {
  open?: boolean;
};

function ListNav(props: Props) {
  return (
    <Ul open={props.open}>
      <Logo
        src={
          'https://colegioprestesmaia.com.br/wp-content/uploads/sites/71/2020/12/seu-logo-aqui-1.png'
        }
        alt='Seu logo aqui'
      />
      <Content>
        <Li>Home</Li>
        <Li>Especialidade</Li>
        <Li>Menu</Li>
        <Li>Sobre</Li>
        <Li>Avaliações</Li>
        <Li>Pedido</Li>
        <Li>Car</Li>
      </Content>
    </Ul>
  );
}

export default ListNav;
