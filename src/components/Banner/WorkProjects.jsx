import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import szy from "../../img/smartzhongyi.png";
import szypatientportal from "../../img/szypatientportal.png";


const WorkProjects = () => {
  return(
    <>
      <Container>
        <Slide direction="left">
          <Texts>
            <h3 className="text-blue">Work Projects</h3>
            <h1>Handpicked on My Career Journey</h1>
          </Texts>
        </Slide>  
      </Container>
      <Container>
        <Slide direction="left">
         <Profile>
            <img
              src={szy}
              alt="profile"
            />
          </Profile>
        </Slide>
        <Slide direction="right">
          <Texts>
            <h4 className="text-blue">SmartZhongYi Clinical Management System</h4>
            <br/>
            <p>
              <ul>
                <li>
                  Spearheaded the maintenance and development of new features within the software system
                </li>
                <li>
                  Engineered a robust RESTful API to enable seamless integration with external applications
                </li>
                <li>
                  Technologies utilized: PHP, Docker for containerization, JavaScript for dynamic functionalities, Bootstrap for responsive design, MySQL for database management, and Web Server configuration for optimal performance.
                </li>
              </ul>
            </p>
          </Texts>
        </Slide>
      </Container>
      <Container>
        <Slide direction="left">
          <Texts>
            <h4 className="text-blue">SmartZhongYi Patient Portal</h4>
            <br/>
            <p>
              <ul>
                <li>
                  Pioneered the creation of a patient portal, enabling convenient online appointment scheduling for patients
                </li>
                <li>
                  Developed the frontend interface and seamlessly integrated it with the REST API of the main SmartZhongYi application
                </li>
                <li>
                  Technologies utilized: Next.js for efficient frontend development and Tailwind CSS for streamlined styling and design.
                </li>
              </ul>
            </p>
          </Texts>
        </Slide>
        <Slide direction="right">
         <Profile>
            <img
              src={szypatientportal}
              alt="profile"
            />
          </Profile>
        </Slide>
      </Container>
      <br />
    </>
  )
}

export default WorkProjects;

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
