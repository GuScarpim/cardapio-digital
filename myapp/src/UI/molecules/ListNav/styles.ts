import styled, { css } from 'styled-components';

type IOpen = {
  open?: boolean;
}

const OpenUl = css`

`

export const Ul = styled.ul<IOpen>`
  ${({ open }) => open && OpenUl};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  margin: 0;
  box-shadow: 0px 4px 6px ${({ theme }) => theme.shadow.color};
  padding: ${({ theme }) => theme.spacing.normal} 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    width: ${({ theme }) => theme.size.maximensively};
    padding: 0;
    position: fixed;
    right: 0;
    z-index: ${({ theme }) => theme.zIndex.dropdown};
    transition: all .5s ease;
    transform: translateX(250px);
    transform: ${({ open }) => open && 'translateX(0px)'};
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xsmall};
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxsmall};
  }
`

export const Li = styled.li`
  font-size: ${({ theme }) => theme.size.xmedium};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.color.gray.dark};
  list-style: none;
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.color.white};
  transition: all .2s;

  &:hover {
    color: ${({ theme }) => theme.color.primary.default};
    border-bottom: 2px solid ${({ theme }) => theme.color.primary.default};
  }


  @media (max-width: 860px) {
    font-size: ${({ theme }) => theme.size.medium};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.size.xmedium};
  }
`

export const Logo = styled.img`
  width: ${({ theme }) => theme.size.xximensively};
  object-fit: contain;

  @media (max-width: 820px) {
    width: ${({ theme }) => theme.size.imensively};
  }

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.size.ximensively};
    margin-top: ${({ theme }) => theme.spacing.xlarge};
    margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
  }
`

