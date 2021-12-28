import { MyTitle } from './styles'

type ITitle = {
  title?: string
};

function Title({ title }: ITitle) {
  return <MyTitle>{title}</MyTitle>;
}

export default Title