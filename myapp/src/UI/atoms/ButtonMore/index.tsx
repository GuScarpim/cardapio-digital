import { Container, Buttons, Tot } from './styles';

interface IButtonMore {
  value?: number;
  onClickMax?: () => void;
  onClickMin?: () => void;
}

function ButtonMore({ value, onClickMax, onClickMin }: IButtonMore) {
  return (
    <Container>
      <Buttons onClick={onClickMin}>-</Buttons>
      <Tot>{value}</Tot>
      <Buttons onClick={onClickMax}>+</Buttons>
    </Container>
  );
}

export default ButtonMore;
