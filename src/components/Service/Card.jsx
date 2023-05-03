import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { imgsrc, disc, title } = props;
  return (
    <Container>
        <img src={imgsrc}></img>
        <h1>{title}</h1>
        <p>{disc}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
    img {
        width: 8rem;
        transition: transform 400ms ease-in-out;
        @media (max-width: 790px) {
          width: 20rem;
        }
    
        @media (max-width: 660px) {
          width: 18rem;
        }
    
        @media (max-width: 640px) {
          width: 100%;
        }
      }
    
      :hover img {
        transform: translateY(-10px);
      }
`