// import React from 'react'
// import styled from "styled-components";

// const Box1 = styled.div` position: absolute;
// width: 369px;
// height: 351px;
// left: 150px;
// top: 1029px;

// background: #1B1D20;
// box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
// border-radius: 12.446px; `;

// const Box2 = styled.div`position: absolute;
// width: 369px;
// height: 351px;
// left: 570px;
// top: 1029px;

// background: #1B1D20;
// box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
// border-radius: 12.446px;`;


// const Box3 = styled.div`position: absolute;
// width: 372px;
// height: 351px;
// left: 990px;
// top: 1029px;

// background: #1B1D20;
// box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
// border-radius: 12.446px;`;
// const Boxes = () => {
//   return (
//     <>
//     <Box1>
//     Box1
//     </Box1>
//     <Box2>
//     Box1
//     </Box2>
//     <Box3>
//     Box1
//     </Box3>
//     </>
//   )
// }

// export default Boxes;

// import React, { lazy } from "react";
// import styled from "styled-components";
// import wave from "../../assets/waves.svg";
// import Slider from "react-slick";
// import "../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../node_modules/slick-carousel/slick/slick-theme.css";

// const Card = lazy(() => import("../../components/Card/index"));

// const Section = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   padding: 5rem 0;
// `;
// const AboutSection = styled.section`
//   width: 100vw;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background:black;
// `;
// const Waves = styled.img`
//   width: 100%;
//   height: auto;
//   position: absolute;
//   top: -1rem;
// `;
// const Stitle = styled.h3`position: absolute;
// position: absolute;
// width: 296px;
// height: 50px;
// left: 5px;
// top: 125px;
// color: white;
// font-family: 'Sulphur Point';
// font-style: normal;
// font-weight: 300;
// font-size: 24px;
// line-height: 24px
// /* identical to box height */


// color: #FFFFFF;`;
// const Stitle2 = styled.h3`position: absolute;
// position: absolute;
// width: 296px;
// height: 50px;
// left: 5px;
// top: 145px;
// color: white;
// font-family: 'Sulphur Point';
// font-style: normal;
// font-weight: 300;
// font-size: 24px;
// line-height: 24px
// /* identical to box height */


// color: #FFFFFF;`;
// const Title = styled.h1`
// position: absolute;
// width: 296px;
// height: 50px;
// left: 150px;
// top: 50px;
// color: white;

// font-family: 'Sulphur Point';
// font-style: normal;
// font-weight: 700;
// font-size: 50px;
// line-height: 50px;
// /* identical to box height */


// color: #FFFFFF;

// `;

// const Carousal = styled.div`
//   width: 50vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   @media only Screen and (max-width: 40em) {
//     width: 90vw;
//     .slick-slider .slick-arrow {
//       display: none;
//     }
//   }
//   .slick-slider .slick-arrow:before {
//     color: #0a0b10;
//     font-size: 1.5rem;
//     @media only Screen and (max-width: 40em) {
//       display: none;
//     }
//   }
//   .slick-slider .slick-dots button:before {
//     color: #0a0b10;
//     font-size: 1.5rem;
//   }
//   .slick-slide.slick-active {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     margin: 0;
//     padding: 0;
//     margin-bottom: 3rem;
//   }
// `;

// const Testimonials = () => {
//   const settings = {
//     dots: true,
//     infinite: true,

//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
    
//     <AboutSection id="about">
//     <Waves src={wave} alt="" />
//       <Title>How it works!
//       <Stitle>Charging your EVs has never

//       </Stitle>
//       <Stitle2> been more convenient</Stitle2>
      
//       </Title>
    
//       <Carousal>
//         <Slider {...settings}>
//           <Card 
//             text="IOT enabled smart charge point"
//             name="Jenny (CodeCall)"
//             image="avatar-1"
//           />

//           <Card
//             text="Bluetooth connectivity"
//             name="Jenny (CodeCall)"
//             image="avatar-2"
//           />

//           <Card
//             text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
//             name="Jenny (CodeCall)"
//             image="avatar-3"
//           />

//           <Card
//             text="Timer based charging "
//             name="Jenny (CodeCall)"
//             image="avatar-4"
//           />
//         </Slider>
//       </Carousal>
//     </AboutSection>
//   );
// };

// export default Testimonials;
import React, { lazy } from "react";
import styled from "styled-components";
import wave from "../../assets/waves.svg";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Scan from "../../assets/Scan.svg"
import Charge from "../../assets/Chargel.svg";
import fell from "../../assets/fell.svg";
const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;
const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  top: 170px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Stitle5 = styled.h3`position: absolute;
width: 219px;
height: 40px;
left: -50px;
top: 140px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 20px;
text-align: center;

color: #EEEEEE;`;
const Stitle4 = styled.h3`position: absolute;
width: 219px;
height: 40px;
left: 6px;
top: 170px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 20px;
text-align: center;

color: #EEEEEE;`;
const Stitle = styled.h3`position: absolute;
position: absolute;
width: 296px;
height: 50px;
left: 5px;
top: 135px;
color: white;
font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 24px
/* identical to box height */


color: #FFFFFF;`;
const Stitle2 = styled.h3`position: absolute;
position: absolute;
width: 296px;
height: 50px;
left: 5px;
top: 155px;
color: white;
font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 24px
/* identical to box height */


color: #FFFFFF;`;
const Title = styled.h1`
position: absolute;
width: 296px;
height: 50px;
left: 150px;
top: 0px;
color: white;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 50px;
/* identical to box height */


color: #FFFFFF;

`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 18%;
  
  padding: 2.1rem;

  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;
const Rocket2 = styled.div`
 
position: absolute;
left: 78.7%;
right: 16.47%;
top: 10.71%;
width: 11.7%;
bottom: 28.48%;
`;

const Rocket3 = styled.div`
 
position: absolute;
left: 40.7%;
right: 33.47%;
top: 10.71%;
width: 11.7%;
bottom: 28.48%;
`;
const Fellx = styled.div`position: absolute;
width: 50px;
height: 143px;
top: 6.71%;
 left: 34px;`;

const Boxx = styled.div`position: absolute;
width: 841px;
height: 234px;
left: 350px;
top:0px;
color:white;
background: inherit;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 12.446px;`;
// const Carousal = styled.div`
//   width: 50vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   @media only Screen and (max-width: 40em) {
//     width: 90vw;
//     .slick-slider .slick-arrow {
//       display: none;
//     }
//   }
//   .slick-slider .slick-arrow:before {
//     color: #0a0b10;
//     font-size: 1.5rem;
//     @media only Screen and (max-width: 40em) {
//       display: none;
//     }
//   }
//   .slick-slider .slick-dots button:before {
//     color: #0a0b10;
//     font-size: 1.5rem;
//   }
//   .slick-slide.slick-active {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     margin: 0;
//     padding: 0;
//     margin-bottom: 3rem;
//   }
// `;

const Boxes = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,

  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    
    <AboutSection id="about">
   
      <Title>How it works!
      <Stitle>Charging your EVs has never

      </Stitle>
      <Stitle2> been more convenient</Stitle2>
      <Boxx>
      <Rocket>
      <img src={Scan} alt="" width="50" height="50" left="2rem" />
      <Stitle4>Find a powerstrip station. Scan the device</Stitle4>
    </Rocket>


  <div style={{"fontWeight": "300px",
  "position": "absolute",
"width": "219px",
"height": "40px",
"left": "-2rem",
  "fontSize": "20px",
  "lineHeight": "20px",
  "textAlign": "center",
"paddingTop":"0.2rem"}}>  </div>
    <Rocket2>
      <img src={Charge} alt="" width="50" height="50" left="2rem" />
     <Stitle5>Hassle-free charging iniatiated!</Stitle5>
    </Rocket2>
    <h6 style= {{"fontWeight": "700px",
    "fontSize": "20px",
    "lineHeight": "20px",
    "paddingLeft":"42.5rem",
    "paddingTop":"0.0rem"

  
  
  }}></h6>
  <Rocket3>
  <Fellx>
      <img src={fell} alt="" width="20" height="20" left="2rem" />
      </Fellx>
      
  
      <Stitle5>Select duration, pay and enjoy.</Stitle5>
    </Rocket3>
    <h6 style= {{"fontWeight": "700px",
    "fontSize": "20px",
    "lineHeight": "20px",
    "paddingLeft":"23rem",
    "paddingTop":"0.0rem"

  
  
  }}></h6>

    </Boxx>
      </Title>
    
   
    </AboutSection>
  );
};

export default Boxes;
