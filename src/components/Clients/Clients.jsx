import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Nico Revaldo Putra Erdi Ardiansa",
        position : "Web Developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 5,
        disc : `I've worked together on assignments with James as a web developer and we've worked in teams 
        on the front-end side. I really appreciate our collaboration because James has always shown great skill in 
        solving technical problems and understanding tasks quickly.
        In addition, James has the ability to learn new things very quickly and 
        is always up for new challenges. Communication with James was always very effective and helpful, 
        as he was able to present ideas clearly and was responsive to my feedback.`
    },
    {
        name : "Maria Carmen Torcende",
        position : "Faculty",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 5,
        disc : ` James Vincent Escartin, a former student of mine in Sisters of Mary School-Boystown during his Junior and 
        Senior High School years, possessed unique strengths and weaknesses. His proficiency in writing stood out as evident 
        in his well-crafted and well-organized outputs. Additionally, he exhibited leadership qualities by efficiently managing
        his time and utilizing school resources to his advantage. James' contributions to the class and the school community were
         noteworthy, making him a valuable member overall.`
    },
    {
        name : "Dale Rollanos",
        position : "Guidance Coordinator",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 5,
        disc : `I was particularly impressed by James's proposal to streamline and organize 
        the records of our Guidance and Counseling Center (GCC). This initiative holds significant
        importance as it enables us to efficiently monitor student performance, ensuring better service delivery 
        and prompt action to meet their individual needs. James's proposal to implement a systematic data management
        system for the GCC showcases his commitment to enhancing our community's well-being. His dedication
        make him invaluable to our community.`
    },
    
]
var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="text-blue">testimonials</span>
            <h1>What others says to me</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #90E0EF;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #90E0EF;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`