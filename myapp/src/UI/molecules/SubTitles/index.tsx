import { MySubTitle } from './styles';

type ISubTitle = {
  subTitle?: string;
  margin?: string;
  padding?: string;
};

function SubTitle({ subTitle, margin, padding }: ISubTitle) {
  return (
    <MySubTitle margin={margin} padding={padding}>
      {subTitle}
    </MySubTitle>
  );
}

export default SubTitle;
