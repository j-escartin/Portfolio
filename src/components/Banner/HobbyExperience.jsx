import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import monitoring from "../../img/monitoring.png";
import mobile from "../../img/meeting.webp";


const HobbyProject = () => {
  return(
    <>
      <Container>
        <Slide direction="left">
          <Texts>
            <h3 className="text-blue">Hobby Projects</h3>
            <h1>How My Hobbies Impacts Lives</h1>
          </Texts>
        </Slide>  
      </Container>
      <Container>
        <Slide direction="left">
         <Profile>
            <img
              src={monitoring}
              alt="profile"
            />
          </Profile>
        </Slide>
        <Slide direction="right">
          <Texts>
            <h4 className="text-blue">Library Student Attendance @ Sisters of Mary School – Boystown, Inc.</h4>
            <br/>
            <p>
              <ul>
                <li>
                  Developed a comprehensive Software System to effectively track student and teacher attendance
                </li>
                <li>
                  Achieved a significant reduction of 100% in paper consumption for library monitoring, while simultaneously enhancing the efficiency of student flow within the library
                </li>
                <li>
                  Technologies employed: PHP for backend functionality, MySQL for database management, and XAMPP Web Server for hosting and deployment.
                </li>
              </ul>
            </p>
          </Texts>
        </Slide>
      </Container>
      <Container>
        <Slide direction="left">
          <Texts>
            <h4 className="text-blue">Pre-College Preparation Mobile Development Project</h4>
            <br/>
            <p>
              <ul>
                <li>
                  More Updates To Come! Ongoing Project!
                </li>
                <li>
                  Led a team of five members in the development process
                </li>
                <li>
                  Spearheaded the creation of a user-friendly mobile application designed to assist students in their preparation for college
                </li>
                <li>
                  Technologies utilized: Flutter for cross-platform app development, Go for backend development 
                </li>
              </ul>
            </p>
          </Texts>
        </Slide>
        <Slide direction="right">
         <Profile>
            <img
              src={mobile}
              alt="profile"
            />
          </Profile>
        </Slide>
      </Container>
      <br />
    </>
  )
}

export default HobbyProject;

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
    width: 30rem;
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
