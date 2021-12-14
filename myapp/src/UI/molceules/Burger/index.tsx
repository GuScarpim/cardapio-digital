import { useState } from 'react';

import { ContainerBurger, LineBurger } from './styles';

// import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContainerBurger open={open} onClick={() => setOpen(!open)}>
        <LineBurger open={open} />
        <LineBurger open={open} />
        <LineBurger open={open} />
      </ContainerBurger>
      {/* <RightNav open={open} /> */}
    </>
  );
};
export default Burger;
