import { useState } from 'react';
import Title from 'src/UI/atoms/Titles'

import Card from 'src/UI/molecules/Card'

import { specialties } from './specialties';

import { Container, Content, Key } from './styles';

function Specialties() {
  const [open, setOpen] = useState('')

  return (
    <Container>
      <Title title='Especialidades' />

      <Content>
        {specialties.map((item) => (
          <Key key={item.id}>
            <Card
              onClick={() => {
                if (open === item.img) {
                  setOpen('');
                } else {
                  setOpen(item.img);
                }
              }}
              large={item.large}
              icon={item.icon}
              img={open === item.img ? item.img : ''}
              text={item.text}
            />
          </Key>
        ))}
      </Content>
    </Container>
  );
}

export default Specialties;
