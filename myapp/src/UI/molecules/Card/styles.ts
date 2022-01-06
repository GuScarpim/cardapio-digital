import styled from 'styled-components'

interface ICard {
  img?: string;
  large?: boolean;
}

export const Card = styled.div<ICard>`
  background-image: ${({ img }) => `url(${img})`};
  background-size: 100% 100%;
  padding: ${({ theme }) => theme.spacing.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.radius.small};
  box-shadow: ${({ theme }) => `0px 0px 6px ${theme.shadow.color}`};
  min-width: ${({ large }) => large ? '510px' : '325px'};
  min-height: 200px;
  cursor: pointer;
  animation: 'Show' 2s linear;

  h1 {
    cursor: text;
    max-width: 300px;
    margin-top: ${({ theme }) => theme.spacing.normal};
    text-align: center;
    font-size: ${({ theme }) => theme.size.medium};
    display: ${({ img }) => img && 'none'};
  }

  img {
    display: ${({ img }) => img && 'none'};
  }
`

export const Icon = styled.img`
  margin-top: 10px;
`