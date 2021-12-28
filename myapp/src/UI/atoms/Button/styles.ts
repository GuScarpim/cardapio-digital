import styled, { css } from 'styled-components'

interface IMedium {
  medium: boolean;
  fontSize: string;
  margin: string;
}

const ButtonMedium = css`
  padding-left: ${({ theme }) => theme.spacing.normal};
  padding-right: ${({ theme }) => theme.spacing.normal};
`

export const CustomButton = styled.button`
  display: flex;
  min-width: 150px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;

  font-size: ${({ theme, fontSize }) => fontSize || theme.size.medium};

  padding: ${({ theme }) => theme.spacing.normal};
  padding-left: ${({ theme }) => theme.spacing.xxsmall};
  padding-right: ${({ theme }) => theme.spacing.xxsmall};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.color.primary.default};
  border: 1px solid ${({ theme }) => theme.color.primary.default};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.radius.small};
  margin: ${({ margin }) => margin};

  ${({ medium }: IMedium) => medium && ButtonMedium};

  svg {
    font-size: 16px;
    animation: rotate infinite 1s linear !important;
  }

  &:hover {
    transition: all 0.5s ease-in-out;

    background-color: ${({ theme }) => theme.color.primary.default};
    border: 1px solid ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.white};
  }
`