import styled from 'styled-components'

export const MySubTitle = styled.h1`
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.color.gray.dark};
`