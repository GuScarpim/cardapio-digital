import { CustomButton } from './styles';

import { ImSpinner9 } from 'react-icons/im';

interface IButton {
  text: string;
  medium?: boolean;
  isLoading?: boolean;
  margin?: string;
  fontSize?: string;
  props?: any;
}

function Button({ text, medium, fontSize, isLoading, margin, props }: IButton) {
  return (
    <CustomButton
      {...props}
      margin={margin || ''}
      medium={medium || false}
      fontSize={fontSize || ''}
    >
      {isLoading ? <ImSpinner9 /> : text}
    </CustomButton>
  );
}

export default Button;
