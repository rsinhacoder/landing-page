// This is HeroSection component, Main top section of website
import lottie from 'lottie-web';
import styled, { keyframes } from "styled-components";
import React, { useEffect, useRef } from 'react';
import pinkBlob from "../../assets/blobPink.png";
import purpleBlob from "../../assets/blob purple.png";
import whiteBlob from "../../assets/blob white.png";
import arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/mobile.svg";
import logo from "../../assets/logo.png";
import Earth from "../../assets/Earth.svg";
import Objects from "../../assets/Objects.svg";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
 import './index.css'
const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 50vw;
  // background-color: #0a0b10;
   background-color: black;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;
const Power = styled.div`position: absolute;
width: 233px;
height: 50px;
left: 70px;
top: 70px;` ;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Box1 = styled.div` position: absolute;
width: 269px;
height: 251px;
left: 150px;
top: 500px;

background: #1B1D20;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 12.446px; `;

const Box2 = styled.div`position: absolute;
width: 269px;
height: 251px;
left: 270px;
top: 500px;

background: #1B1D20;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 12.446px;`;


const Box3 = styled.div`position: absolute;
width: 269px;
height: 251px;
left: 390px;
top: 500px;

background: #1B1D20;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 12.446px;`;



const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  display: flex;
  left:30px;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;


const MobilexSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 5;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const MobileSvg = styled.img`
  max-width: 80%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 5;
  
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;
const tx = styled.text`position: absolute;
width: 318px;
height: 104px;
left: 175px;
top: 1226px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 20px;
text-align: center;
letter-spacing: 0.04em;

color: #EEEEEE;`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;

const CTA = styled.button`
  background-color: var(--white);
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const HeroSection = () => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./office.json')
    })
  }, [])
  return (
    <HomeSection id="home">
     
      <MainContent id="home">
      <Power>
        <img src={logo} alt="" width="200" height="200" />
        </Power>
        <Lb id="leftBlock">
        
          <Topic>
            <Circle />
            <span>One step closer towards cleaner environment</span>
          </Topic>
          <Title>Decarbonizing Bharat</Title>
          <div>
          We at powerstrip are creating an Electric vehicle ecosystem with the prime focus to decarbonize bharat. We are proudly a made in India company. 
         
         
          </div>
          
          <CTA> <a href="https://app.powerstrip.in/login">
          Get the App &nbsp;
          </a>
          
           
            <img src={arrow} alt="cta" width="100" height="100" />
          </CTA>
        </Lb>
     
        <div className="container" ref={container}></div>
        
        
        
      </MainContent>
      
    </HomeSection>
  );
};

export default HeroSection;
