import { MyTitle } from './styles';

type ITitle = {
  title?: string;
  margin?: string;
  padding?: string;
};

function Title({ title, margin, padding }: ITitle) {
  return (
    <MyTitle margin={margin} padding={padding}>
      {title}
    </MyTitle>
  );
}

export default Title;
