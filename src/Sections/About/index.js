import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";
import Greenkilometer from "../../assets/Greenkilometer.svg";
import Energy from "../../assets/Energy.svg";
import Carbon from "../../assets/Carbon.svg";
const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  width: 100vw;
  height:50vw;
  position: relative;
  display: flex;
 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:black;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 12rem;
  height: 2rem;
  padding: 3rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding: 1.4rem;
  // animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Box1 = styled.div` position: absolute;
width: 369px;
height: 201px;
left: 150px;
top: 85px;
opacity:0.8;
transition: opacity 30ms ;

 :hover{
    opacity:1;
  }


background: #1B1D20;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 12.446px; `;
const Stitle5 = styled.h1`position: absolute;
width: 219px;
height: 40px;
left: 135px;
top: 20px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 20px;
text-align: right;

color: #EEEEEE;`;

const Box2 = styled.div`position: absolute;
width: 369px;
height: 201px;
left: 570px;
top: 85px;
opacity:0;
transition: opacity 30ms ;

 :hover{
    opacity:1;
  }

background: #1B1D20;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 12.446px;`;


const Box3 = styled.div`position: absolute;
width: 372px;
height: 201px;
left: 990px;
top: -155px;
opacity:0;
transition: opacity 30ms ease-in-out(0.1,0.7,0.0,0.1) ;

 :hover{
    opacity:1;
  }

background: #1B1D20;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 12.446px;`;

const Text = styled.h4`
  font-size: calc(2rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;
function About() {
    
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      
      <Main>
      
        <div>
          <Title style={{"color":"black"}}>Our Features!</Title>
          
        </div>

        <CurvedLine />
        <Content>
        <Box1>

        <Rocket>
            <img src={Carbon} alt="" width="50" height="50" left="2rem" />
           <Stitle5>Electric vehicles typically have a smaller carbon footprint than gasoline cars, even when accounting for the electricity used for charging.</Stitle5>
          </Rocket>
          <h4 style={{'color':'whitesmoke', 'padding': '0.5rem'}}> Carbon Efficient</h4>
    </Box1>
    <Box2>
    
    <Rocket>
    <img src={Energy} alt="" width="25" height="25" />
  </Rocket>
 <h4 style={{'color':'whitesmoke', 'padding': '0.5rem'}}> Energy Efficient</h4>
<Stitle5>EVs have several advantages over conventional vehicles: Energy efficient. EVs convert over 77% of the electrical energy from the grid to power at the wheels.</Stitle5>
    </Box2>
    <Box3>
    <Rocket>
    <img src={Greenkilometer} alt="" width="25" align='center' height="25" />
    <Stitle5>EVs have several advantages over conventional vehicles: Energy efficient. EVs convert over 77% of the electrical energy from the grid to power at the wheels.</Stitle5>
  </Rocket>
  <h4 style={{'color':'whitesmoke', 'padding': '0.5rem'}}> Green Kilometer </h4>


    
    </Box3>
          
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
