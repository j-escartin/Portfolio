import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import module1 from "../../img/m1.png";
import module2 from "../../img/m2.png";
import module3 from "../../img/m3.png";
import module4 from "../../img/m4.png";
import module5 from "../../img/m5.png";
import module6 from "../../img/m6.png";
import module7 from "../../img/m7.png";
import module8 from "../../img/m8.png";
import module9 from "../../img/m9.png";



let data = [
    {
        img : module1,
        disc : "ABC Learning, Inc. Website Development",
        link : "https://github.com/j-escartin/ABC-Learning-Center.git"
    },
    {
        img : module2,
        disc : "MCQ System",
        link: ""
    },
    {
        img : module3,
        disc : "UI Design for by ABC Jobs Pte Ltd"
    },
    {
        img : module4,
        disc : "ABC Jobs Pte Ltd. Database Design"
    },
    {
        img : module5,
        disc : "Develop and Implemented ABC Jobs Pte Ltd."
    },
    {
        img : module6,
        disc : "Tripple-A  Website"
    },
    {
      img : module7,
      disc : "ABC Cars Pte Ltd Portal"
    },
    {
      img : module8,
      disc : "Know Your Neighborhood Website"
     },
     {
      img : module9,
      disc : "Meals on Wheels Web Application"
     }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`