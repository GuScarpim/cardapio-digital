import styled from 'styled-components'

interface IText {
  margin?: string;
  padding?: string;
}

export const MySubTitle = styled.h1<IText>`
  font-size: ${({ theme }) => theme.size.xmedium};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.color.gray.dark};
  margin: ${({ margin }) => margin ? margin : '0px'};
  padding: ${({ padding }) => padding ? padding : '0px'};
`