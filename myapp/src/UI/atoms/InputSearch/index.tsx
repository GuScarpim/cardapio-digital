import { FaSearch } from 'react-icons/fa';

import { InputCustom, Container, Content } from './styles';

interface IInput {
  placeholder?: string;
  onChange?: () => void;
  value?: string;
}

export default function InputSearch({ placeholder, onChange, value }: IInput) {
  return (
    <Container>
      <Content>
        <FaSearch />
      </Content>
      <InputCustom
        type='search'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
}
