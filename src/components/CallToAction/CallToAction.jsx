import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import pwithIcon from "../../img/profilewithicon.png";



const CallToAction = () => {
  return(
    <>
      <Container id="call">
        <Slide direction="left">
         <Texts>
            <h1 className="text-blue">Ready to take your project to the next level? </h1>
            <br/>
            <p>
              Let's chat and connect!
            </p>
          </Texts>
        </Slide>
        <Slide direction="right">
          <Profile>
            <img
              src={pwithIcon}
              alt="profile"
            />
          </Profile>
        </Slide>
      </Container>
    </>
  )
}

export default CallToAction;

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
