import { InputCustom, Option } from './styles';

interface IInput {
  placeholder?: string;
  onChange?: () => void;
  options?: any;
}

export default function InputFilter({ placeholder, onChange, options }: IInput) {
  return (
    <InputCustom onChange={onChange}>
      <Option value=''>{placeholder}</Option>
      {options.map((option: any) => (
        <Option value={option.value}>{option.value}</Option>
      ))}
    </InputCustom>
  );
}
