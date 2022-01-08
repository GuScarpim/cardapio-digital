import styled from 'styled-components'

import Title from 'src/UI/atoms/Titles';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing.normal};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.radius.small};
  box-shadow: ${({ theme }) => `0px 0px 6px ${theme.shadow.color}`};
  width: 230px;
  margin-bottom: ${({ theme }) => theme.spacing.nano};
`

export const TitleCustom = styled(Title).attrs(() => ({
  size: '22px',
  margin: '0 0 10px'
}))``

export const ContentVegan = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.nano};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing.xxsmall};
  height: ${({ theme }) => theme.spacing.xxsmall};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.green};
  img {
    width: ${({ theme }) => theme.spacing.normal};
  }
`

export const Image = styled.img`
  width: 140px;
  object-fit: contain;
`

export const KeyStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg {
    color: ${({ theme }) => theme.color.primary.secondary};
  }
`

export const SubTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.color.gray.dark};
  font-size: ${({ theme }) => theme.size.xsmall};
  margin: ${({ theme }) => theme.spacing.normal} 0;
`

export const ContentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
  margin: ${({ theme }) => theme.spacing.normal};
`

export const ButtonCustom = styled.div`
  button {
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.primary.default};
    background-color: ${({ theme }) => theme.color.primary.default};
    border-radius: ${({ theme }) => theme.border.radius.nano};
    height: 30px;
    min-width: 138px;
    font-size: ${({ theme }) => theme.size.small};
    text-transform: capitalize;
    padding: 0;
    flex-wrap: nowrap;

    &:hover {
      color: ${({ theme }) => theme.color.primary.default};
      border: 1px solid ${({ theme }) => theme.color.primary.default};
      background-color: ${({ theme }) => theme.color.white};
    }
  }
`