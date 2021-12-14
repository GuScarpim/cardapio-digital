import { CustomButton } from './styles';

import { ImSpinner9 } from 'react-icons/im';

interface IButton {
  text: string;
  medium?: boolean;
  isLoading?: boolean;
  fontSize?: string;
}

function Button({ text, medium, fontSize, isLoading }: IButton) {
  return (
    <CustomButton medium={medium || false} fontSize={fontSize || ''}>
      {isLoading ? <ImSpinner9 /> : text}
    </CustomButton>
  );
}

export default Button;
