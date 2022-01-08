import { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';

import Button from 'src/UI/atoms/Button';
import ButtonMore from 'src/UI/atoms/ButtonMore';
import Hamburger from 'src/Assets/menu/menu-1.png';
import Vegan from 'src/Assets/menu/vegan.png';

import {
  Card,
  ContentVegan,
  ContentButtons,
  ButtonCustom,
  Image,
  KeyStars,
  SubTitle,
  TitleCustom,
} from './styles';

interface IProductsArray {
  vegan?: string;
  img?: string;
  title?: string;
  subtitle?: string;
  stars?: string;
  price?: string;
}

interface IProducts {
  products?: Array<IProductsArray>;
}

function Product({ products }: IProducts) {
  const [stars] = useState([0, 1, 2, 3, 4]);
  const produc = products;

  return (
    <Card>
      <ContentVegan>
        <img src={Vegan} alt='Vegano' />
      </ContentVegan>
      <Image src={Hamburger} alt='Lanche' />
      <TitleCustom title={'Hamburger'} />
      <KeyStars>
        {stars.map((_, index) => (
          <AiFillStar key={index} />
        ))}
      </KeyStars>
      <SubTitle>
        Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero
        malesuada feugiat.
      </SubTitle>
      <ContentButtons>
        <ButtonMore value={1} />
        <ButtonCustom>
          <Button text='Adicionar R$14,99' fontSize='12px' />
        </ButtonCustom>
      </ContentButtons>
    </Card>
  );
}

export default Product;
