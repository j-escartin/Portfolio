import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import aboutProfile from "../../img/aboutProfile.png"
import Background from "./Background";

import Vision from "./Vision";
import Mission from "./Mission";
import Values from "./Values";
import Experience from "./Experience";
import Interest from "./Interest";

const ProfComponent = () => {
  return (
    <>
      <Container id="home">
        <Slide direction="left">
          <Texts>
            <h4>
              Hey <span className="text-blue">It's</span>
            </h4>
            <h1 className="text-blue">James Vincent Escartin</h1>
            <h3>Software Engineer | Full Stack Developer </h3>
            <p>
            I'm an esteemed Software Engineer currently studying for an Applied Degree in Software Engineering from Lithan Academy Singapore, 
            where I've gained a strong foundation in the fundamentals of software engineering. 
            Concurrently, I work at Smmile Digital Singapore as a Software Engineer. <br /> <br />

            Outside of work, I have a passion for exploring new technologies and solving real-life problems. 
            I enjoy bringing together teams of volunteers to learn and collaborate on projects. 
            Additionally, I have a keen interest in studying leadership, personal development, relationships, finance, and business.
            </p>
            <button>
              <a href="https://www.dropbox.com/scl/fi/rd6pzwtpft1vn3llys1g4/JamesVincentEscartin-Resume-april-2024.pdf?rlkey=clv3db0d9n82ebgmp0vydjfd2&dl=0">Resume</a>
            </button>
          </Texts>
        </Slide>
        <Slide direction="right">
          <Profile>
            <img
              src={aboutProfile}
              alt="profile"
            />
          </Profile>
        </Slide>
      </Container>
    </>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
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
    text-align: justify:
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
  a {
    color: #fff;
    font-weight: 500;
    text-decoration: none
  }
`;

const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
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
