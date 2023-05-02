import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";



const Values = () => {
  return(
    <>
      <Container>
        <Slide direction="left">
         <Texts>
            <h1 className="text-blue">Values</h1>
            <p>
            <br/>
            <span className="text-blue">Integrity:</span> 
            I believe in conducting myself with the utmost integrity and honesty, and always striving to do the right thing, 
            even when it's difficult.
            <br/> <br/>
            <span className="text-blue">Authenticity:</span> 
            I value being true to myself and my beliefs, and building genuine connections with others based on trust, 
            respect, and empathy
            <br/> <br/>
            <span className="text-blue">Continuous Learning:</span>
             I am committed to constantly learning and growing and seeking out new challenges and experiences to 
            expand my knowledge and skills.
            <br/> <br/>
            <span className="text-blue">Innovation:</span>
            I am driven by a passion for creativity and innovation and am always looking for new and better ways to 
            solve problems and make a positive impact.
            <br/> <br/>
            <span className="text-blue">Relationship-Centered: </span>
             I believe that building and maintaining strong, positive relationships with others is key to 
            personal and professional success, and I am dedicated to fostering those connections through open communication, collaboration, and mutual respect.
            </p>
          </Texts>
        </Slide>
        <Slide direction="right">
          <Profile>
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/872/680/original/3d-personal-businessman-goals-png.png"
              alt="profile"
            />
          </Profile>
        </Slide>
      </Container>
    </>
  )
}

export default Values; 

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
