import styled from 'styled-components'

export const InputCustom = styled.select`
  height: ${({ theme }) => theme.spacing.large};
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.gray.dark};
  background: ${({ theme }) => theme.color.white};
  width: ${({ theme }) => theme.size.xxximensively};
  border-radius: ${({ theme }) => theme.border.radius.small};
  padding-left: ${({ theme }) => theme.spacing.nano};
`

export const Option = styled.option`
  height: ${({ theme }) => theme.spacing.large};
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.gray.dark};
  border-radius: ${({ theme }) => theme.border.radius.small};
  padding-left: ${({ theme }) => theme.spacing.nano};
`
