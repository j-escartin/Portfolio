import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";



const Interest = () => {
  return(
    <>
      <Container>
        <Slide direction="left">
         <Texts>
            <h1 className="text-blue">Interest and Hobbies</h1>
            <br/>
            <h4>
              Students’ Profiling System 
            </h4>
            <p>
              <span className="text-blue">Status: </span> Ongoing <br/>
              <span className="text-blue">Helped Institution: </span> Sisters of Mary School - Boystown, Inc.
            </p>
            <h4>
              Read More than 10 Books 
            </h4>
            <p>
              <span className="text-blue">Genre: </span> Non-Fiction 
              (Leadership, Personal Development, Psychology, Entrepreneurship, etc.) <br/>
            </p>
            <h4>
              Participated 60-Earth Hour Virtual Run 
            </h4>
            <p>
              <span className="text-blue">Distance: </span> 60 Kilometers <br/>
              <span className="text-blue">Time Span: </span> March 25, 2023 - April 30, 2023
            </p>
          </Texts>
        </Slide>
        <Slide direction="right">
          <Profile>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/kids-playing-video-games-5581385-4674262.png"
              alt="profile"
            />
          </Profile>
        </Slide>
      </Container>
    </>
  )
}

export default Interest; 

const Container = styled.div`
display: flex;
align-items: center;
gap: 2rem;
padding-top: 3rem;
width: 80%;
max-width: 1280px;
margin: 0 auto;
z-index: 1;
@media (max-width: 840px) {
  width: 90%;
}

@media (max-width: 640px) {
  flex-direction: column;
}
`;
const Texts = styled.div`
flex: 1;
align-items: center;
h4 {
  padding: 1rem 0;
  font-weight: 500;
}
h1 {
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
}
h3 {
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 1.2rem;
  text-transform: capitalize;
}
p {
  font-weight: 300;
  text-align: justify;
  line-height: 1.5;
}

button {
  padding: 0.7rem 2rem;
  margin-top: 3rem;
  margin-right: 1rem;
  cursor: pointer;
  background-color: #0077B6;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  }
}
`;

const Profile = styled.div`
  img {
    width: 25rem;
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
`;
