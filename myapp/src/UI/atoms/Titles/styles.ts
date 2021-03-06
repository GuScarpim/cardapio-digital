import styled from 'styled-components'

interface IText {
  margin?: string;
  padding?: string;
  size?: string;
}

export const MyTitle = styled.h1<IText>`
  font-size: ${({ theme, size }) => size ? size : theme.size.xxlarge};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.color.black};
  margin: ${({ margin }) => margin ? margin : '0px'};
  padding: ${({ padding }) => padding ? padding : '0px'};
`