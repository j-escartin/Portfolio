import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import Java from "../../img/java.png";
import OOP from "../../img/oop.png";
import Data from "../../img/datastructure.png";
import MySQL from "../../img/mysql.png";
import ReactLogo from "../../img/react.png";
import Postman from "../../img/postman.png";
import Spring from "../../img/spring.png";
import Github from "../../img/github.png"

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="text-blue">Skills</span>
        </h4>
        <h1>What I Learn and Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            imgsrc={Java}
            title={"Proficiency in Programming Language"}
            disc={`Proficient in Java with experience in developing and maintaining software applications using these language.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            imgsrc={OOP}
            title={"Object-Oriented Programming"}
            disc={`Strong understanding of object-oriented programming principles 
                  and ability to design and implement applications.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            imgsrc={Data}
            title={"Web Algorithms and Data Structure"}
            disc={`Experience in developing algorithms and data structures 
                to solve complex problems and improve performance.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            imgsrc={MySQL}
            title={"Database Design and Management"}
            disc={`Proficient in SQL and experienced in working with MySQL database management systems`}
          />
        </Slide>

        <Slide direction="left">
          <Card
            imgsrc={ReactLogo}
            title={"Web Development"}
            disc={`Skilled in front-end web development using HTML, CSS, and JavaScript, 
            as well as experience with React and Angular.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            imgsrc={Postman}
            title={"Testing and Debugging"}
            disc={`Skilled in software testing and debugging to identify and fix bugs
             and ensure the quality of the final product.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            imgsrc={Github}
            title={"Version Control"}
            disc={`Proficient in using Git for version control and collaborated with other developers using GitHub.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            imgsrc={Spring}
            title={"Security"}
            disc={`Familiar with secure coding practices, including encryption, access control
             to protect applications from cyber threats.`}
          />
        </Slide>

        
        

      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
