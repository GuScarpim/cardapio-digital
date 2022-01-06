import { MyTitle } from './styles';

type ITitle = {
  title?: string;
  margin?: string;
  padding?: string;
  size?: string;
};

function Title({ title, margin, padding, size }: ITitle, props?: any) {
  return (
    <MyTitle margin={margin} padding={padding} size={size} {...props}>
      {title}
    </MyTitle>
  );
}

export default Title;
