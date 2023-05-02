import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";


const Experience = () => {
  return(
    <>
      <Container>
        <Slide direction="left">
          
         <Profile>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/panorama-experience-4787848-3986060.png"
              alt="profile"
            />
          </Profile>
        </Slide>
        <Slide direction="right">
          <Texts>
            <h1 className="text-blue">Experience</h1>
            <br/>
            <h4>January 2022 – Present <br/>
              Research Assistant – Part Time
            </h4>
            <p>
              <ul>
                <li>
                  Contributed to research papers and reports.
                </li>
                <li>
                  Collected and analysed data utilizing a variety of methods, including surveys, interviews, and focus groups.
                </li>
                <li>
                  Collaborated with other researchers to execute various projects.
                </li>
                <li>
                  Accomplished all research tasks within budget and on schedule.
                </li>
              </ul>
            </p>
            <h4>July 2021 – December 2021<br/>
              Mass and Media Intern
              Sisters of Mary School – Boystown, Inc.         
            </h4>
            <p>
              <ul>
                <li>
                  Researched and crafted news articles, features, and blog posts.
                </li>
                <li>
                  Produced and refined social media content.
                </li>
                <li>
                  Organized and executed events.
                </li>
                <li>
                  Worked closely with other interns and staff members to achieve project goals.
                </li>
              </ul>
            </p>
          </Texts>
        </Slide>
      </Container>
    </>
  )
}

export default Experience;

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
