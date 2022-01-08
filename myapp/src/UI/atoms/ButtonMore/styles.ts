import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.gray.default};
  border-radius: ${({ theme }) => theme.border.radius.nano};
  width: 90px;
`

export const Buttons = styled.button`
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.size.xxmedium};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.color.primary.default};
  background: none;
  cursor: pointer;
  width: 30px;
  height: 30px;

  &:active {
    transform: scale(.9);
  }
`

export const Tot = styled.div`
  font-size: ${({ theme }) => theme.size.xsmall};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.color.black};
`
