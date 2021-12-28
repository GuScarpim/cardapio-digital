import { InputCustom } from './styles';

interface IInput {
  placeholder?: string;
  onChange?: () => void;
  value?: string;
}

function Input({ placeholder, onChange, value }: IInput) {
  return (
    <InputCustom
      type='search'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
