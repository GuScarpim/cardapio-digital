import styled from 'styled-components'

export const Container = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentText = styled.div`
  max-width: 60%;
`

export const ContentImg = styled.div`
`

export const Img = styled.img`
  width: 500px;
  animation: 'Move' 3s linear infinite;

  @keyframes Move {
    0%, 100% {
      transform: translateY(0rem);
    }

    50% {
      transform: translateY(3rem);
    }
  }
`
