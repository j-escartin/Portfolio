import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";


const Education = () => {
  return(
    <>
      <Container>
        <Slide direction="left">
          <Texts>
            <h4>Lithan Academy - Singapore<br/>
              Applied Degree in Software Engineering, Computer Science <br />
              June 2022 - June 2024
            </h4>
            <p>
              <ul>
                <li>
                  Coming Soon!
                </li>
              </ul>
            </p> <br />

            <h4>Sisters of Mary School-Boystown, Inc. - Cebu, Philippines<br/>
              Secondary, Technical Vocational- Mechatronics Technology <br />
              June 2016 - June 2022
            </h4>
            <p>
              <ul>
                <li>
                  Earned the Bronze Medal in Mechatronics at the prestigious Philippine National Skills Competition in 2021.
                </li>
                <li>
                  Garnered the title of Best in Mechatronics as a result of winning a highly competitive National Level Competition.
                </li>
                <li>
                  Graduated with Honours and achieved a remarkable percentile rank of 99.7% out of 317 students.
                </li>
              </ul>
            </p>
          </Texts>
        </Slide>
        <Slide direction="right">
         <Profile>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-with-vision-4999857-4165683.png"
              alt="profile"
            />
          </Profile>
        </Slide>
      </Container>
    </>
  )
}

export default Education;

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
