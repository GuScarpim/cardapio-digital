import { MySubTitle } from './styles'

type ISubTitle = {
  subTitle?: string
};

function SubTitle({ subTitle }: ISubTitle) {
  return <MySubTitle>{subTitle}</MySubTitle>;
}

export default SubTitle