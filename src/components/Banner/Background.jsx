import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import aboutProfile from "../../img/aboutProfile.png"


const Background = () => {
  return(
    <>
      <Container>
        <Slide direction="left">
          
         <Profile>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/movie-script-4843374-4060940.png"
              alt="profile"
            />
          </Profile>
        </Slide>
        <Slide direction="right">
          <Texts>
            <h1 className="text-blue">Background</h1>
            <br/>
            <p>
            I'm an esteemed Software Engineer currently studying for an Applied Degree in Software Engineering from Lithan Academy Singapore,
            where I've gained a strong foundation in the fundamentals of software engineering. 
            Concurrently, I work at Smmile Digital Singapore as a Software Engineer. <br />

            Outside of work, I have a passion for exploring new technologies and solving real-life problems. 
            I enjoy bringing together teams of volunteers to learn and collaborate on projects. 
            Additionally, I have a keen interest in studying leadership, personal development, relationships, finance, and business.
            </p>
          </Texts>
        </Slide>
      </Container>
    </>
  )
}

export default Background;

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
