import SubTitle from 'src/UI/atoms/SubTitles';

import { Card, Icon } from './styles'

interface ICard {
  icon?: string;
  img?: string;
  text?: string;
  large?: boolean;
  onClick?: () => void;
}

const MyCard = ({ icon, img, text, large, onClick }: ICard) => {
  return (
    <Card img={img} onClick={onClick} large={large}>
      <Icon src={icon} alt='Icone' />
      <SubTitle subTitle={text} />
    </Card>
  );
};

export default MyCard;
