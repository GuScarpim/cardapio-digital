import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const InputCustom = styled.input`
  height: ${({ theme }) => theme.spacing.large};
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.gray.dark};
  border-radius: ${({ theme }) => theme.border.radius.small};
  width: ${({ theme }) => theme.size.xxximensively};
  background: ${({ theme }) => theme.color.white};
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding-left: ${({ theme }) => theme.spacing.nano};
  border-left: none;
`

export const Content = styled.div`
  height: 38px;
  border: 1px solid ${({ theme }) => theme.color.gray.dark};
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.quark};
  border: 1px solid ${({ theme }) => theme.color.gray.dark};
  border-radius: ${({ theme }) => theme.border.radius.small};
  border-right: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  color: ${({ theme }) => theme.color.gray.dark};

  svg {
    color: ${({ theme }) => theme.color.gray.dark};
  }
`
