import React from "react";

import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import Java from "../../img/java.png";
import ReactLogo from "../../img/react.png";
import Spring from "../../img/spring.png";
import Js from "../../img/js.png";
import Ts from "../../img/ts.png";
import Php from "../../img/php.png";
import Py from "../../img/python.png";
import Flutter from "../../img/flutter.png";
import Go from "../../img/go.png";
import Docker from "../../img/docker.png";
import Tailwind from "../../img/tailwind.png";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="text-blue">Skills</span>
        </h4>
        <h1>I'm decent at</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            imgsrc={Java}
            title={"Java Language"}
          />
        </Slide>
        
        <Slide direction="left">
          <Card
            imgsrc={ReactLogo}
            title={"React Framework"}
          />
        </Slide>
        
        <Slide direction="right">
          <Card
            imgsrc={Spring}
            title={"Spring Framework"}
          />
        </Slide>

        <Slide direction="right">
          <Card
            imgsrc={Js}
            title={"Javascript"}
          />
        </Slide>
        
        <Slide direction="left">
          <Card
            imgsrc={Ts}
            title={"Typescript"}
          />
        </Slide>
        
        <Slide direction="left">
          <Card
            imgsrc={Php}
            title={"Php Langauage"}
          />
        </Slide>

        <Slide direction="right">
          <Card
            imgsrc={Py}
            title={"Python Langauage"}
          />
        </Slide>
      </Cards>
      <Slide direction="down">
        <br /><br />
        <h4>
          My <span className="text-blue">Skills</span>
        </h4>
        <h1>I've touched before</h1>
      </Slide>
      <Cards>
        <Slide direction="right">
          <Card
            imgsrc={Tailwind}
            title={"Tailwind Css"}
          />
        </Slide>

        <Slide direction="left">
          <Card
            imgsrc={Docker}
            title={"Docker"}
          />
        </Slide>
        
        <Slide direction="left">
          <Card
            imgsrc={Flutter}
            title={"Flutter"}
          />
        </Slide>
        
        <Slide direction="right">
          <Card
            imgsrc={Go}
            title={"Go Language"}
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
