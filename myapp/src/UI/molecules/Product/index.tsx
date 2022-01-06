import { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';

import Vegan from 'src/Assets/menu/vegan.png';
import Hamburger from 'src/Assets/menu/menu-1.png';

import {
  Card,
  ContentVegan,
  Image,
  KeyStars,
  SubTitle,
  TitleCustom,
} from './styles';

function Product() {
  const [stars] = useState([0, 1, 2, 3, 4]);

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
    </Card>
  );
}

export default Product;
