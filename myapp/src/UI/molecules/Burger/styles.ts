import styled from 'styled-components'

interface INav {
  open: boolean;
}

export const ContainerBurger = styled.div<INav>`
  position: fixed;
  top: ${({ theme }) => theme.spacing.xxxsmall};
  right: ${({ theme }) => theme.spacing.xxsmall};
  z-index: ${({ theme }) => theme.zIndex.drawer};
  cursor: pointer;
  display: none;
  z-index: 9999;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`

export const LineBurger = styled.div<INav>`
  width: ${({ theme }) => theme.size.xlarge};
  height: ${({ theme }) => theme.size.nano};
  margin-bottom: ${({ theme }) => theme.spacing.quark};
  background-color: ${({ open }) => open ? '#000' : '#000'};
  border-radius: ${({ theme }) => theme.border.radius.large};
  transform-origin: 1px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(48deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  &:nth-child(3) {
    margin-top: ${({ open, theme }) => open && theme.size.xnano};
    transform: ${({ open }) => open ? 'rotate(-48deg)' : 'rotate(0)'};
  }
`

export const Shadow = styled.div<INav>`
  display: ${({ open }) => !open && 'none'};
  background: ${({ theme }) => theme.color.gray.shadow};
  position: fixed;
  width: 100vw;
  height: 100vh;
`