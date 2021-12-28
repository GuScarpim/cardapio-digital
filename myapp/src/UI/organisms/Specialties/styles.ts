import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Key = styled.div`
`

export const Content = styled.div`
  padding: 0 12%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  margin: ${({ theme }) => theme.spacing.xxlarge} 0;
`