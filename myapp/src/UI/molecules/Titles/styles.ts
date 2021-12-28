import styled from 'styled-components'

export const MyTitle = styled.h1`
  font-size: ${({ theme }) => theme.size.xxlarge};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.color.black};
`