import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";



const Mission = () => {
  return(
    <>
      <Container>
        <Slide direction="left">
         <Texts>
            <h1 className="text-blue">Mission</h1>
            <br/>
            <p>
              My mission is to revolutionize the field of robotics by creating intelligent machines that 
              work in harmony with humans to solve complex problems. I am committed to making the lives of people around 
              the world more awesome and effortless, by developing robots that can assist and augment human capabilities. 
              Through cutting-edge technology and innovation, my goal is to empower individuals and organizations with the tools 
              they need to achieve greater success and productivity. With a focus on user-centered design and ethical practices, 
              I strive to create a future where humans and robots can coexist harmoniously to create a better world.
            </p>
          </Texts>
        </Slide>
        <Slide direction="right">
          <Profile>
            <img
              src=" https://static.vecteezy.com/system/resources/previews/013/866/250/original/mission-3d-rendering-isometric-icon-png.png"
              alt="profile"
            />
          </Profile>
        </Slide>
      </Container>
    </>
  )
}

export default Mission;

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
