import { useState } from 'react';

import ListNav from '../ListNav';

import { ContainerBurger, LineBurger, Shadow } from './styles';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Shadow open={open} onClick={() => setOpen(!open)} />
      <ContainerBurger open={open} onClick={() => setOpen(!open)}>
        <LineBurger open={open} />
        <LineBurger open={open} />
        <LineBurger open={open} />
      </ContainerBurger>
      <ListNav open={open} />
    </>
  );
};
export default Burger;
