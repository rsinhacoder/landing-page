// import React from 'react'
// import styled from 'styled-components';

// const box = styled.div`position: absolute;
// width: 627px;
// height: 468px;
// // left: 15px;
// // top: 10px;

// // background: #1B1D20;
// // box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
// // border-radius: 12.446px;`;
// const Email = () => {
//   return (
    
//     <box>
//     hello
//     </box>
    
//   )
// }

// export default Email

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
import doorstep from "../../assets/doorstep.svg";
const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
  background-color: black;
`;
const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  top: 550px;
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
const Stitle = styled.h3`position: absolute;
position: absolute;
width: 296px;
height: 50px;
left: 5px;

top: 311px;
color: white;
font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 24px
/* identical to box height */


color: #FFFFFF;`;
const Stitle2 = styled.h2`position: absolute;
width: 430px;
height: 24px;
left: 0px;
top: 165px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 24px;
/* identical to box height */


color: white;`;
const liz = styled.text`
left: 52.65%;
right: 14.29%;
top: 8%;
// bottom: 22.47%;

background: #1B1D20;
box-shadow: inset -4px -4px 8px #27292D, inset 4px 4px 8px #070809;
border-radius: 10px;`;
const Form = styled.h6`position: absolute;
left: 52.65%;
right: 14.29%;
top: 8%;
// bottom: 22.47%;

background: #1B1D20;
box-shadow: inset -4px -4px 8px #27292D, inset 4px 4px 8px #070809;
border-radius: 10px;`;
const Titlex = styled.text`
position: absolute;
width: 424px;
height: 100px;
left: 0px;
top: -100px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 50px;
letter-spacing: 0.03em;

color: white;

`;
const Title = styled.text`
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
const hxcy1 = styled.div`position: absolute;
left: 52.65%;
right: 14.29%;
// top: 76.79%;
bottom: 22.47%;

background: #1B1D20;
box-shadow: inset -4px -4px 8px #27292D, inset 4px 4px 8px #070809;
border-radius: 10px;`;
const Stitle5 = styled.h3`position: absolute;
width: 219px;
height: 40px;
left: -30px;
top: 16px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 20px;
text-align: center;

color: #EEEEEE;`;
const Stitlex = styled.h3`position: absolute;
width: 430px;
height: 24px;
left: 0px;
top: 30px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 24px;
/* identical to box height */


color: white;`;

const Ind = styled.div`position: absolute;
// left: 52.65%;
// right: 42.66%;
// top: 77.83%;
// bottom: 21.44%;

background: #1FA7FE;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 10px;`;

const Boxx = styled.div`position: absolute;
width: 500px;
height: 300px;
left: 540px;
top:-75px;
color:white;
background: inherit;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 12.446px;`;
// width: 500px;
// height: 300px;
// left: 540px;
//  top: -75px;

// background: #1B1D20;
// box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
// border-radius: 12.446px;`
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

const Email = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,

  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    
    <AboutSection id="about">
    
      <Title>     <img src={doorstep} alt="Tube Object" width="250" height="400" />
      <Titlex>
     
      </Titlex>
      <Stitle2>   Powerstrip at your doorstep! 
      <Stitlex>   Get your own device at your doorstep. </Stitlex> </Stitle2>
      
      <Boxx>
    
    
    
    
      <input placeholder="Name" type="text" name="name" required style={{'left': '102.65%',
        'right': '114.29%',
        'marginTop': '2rem',
        "width":"70%",
    "marginLeft":"4.5rem",
        'padding':'0.6rem',
        // bottom: 22.47%;
        
        'background': '#1B1D20',
        'boxShadow': 'inset -4px -4px 8px #27292D, inset 4px 4px 8px #070809',
        'borderRadius': '5px'}}/>
 <ul>
    <input placeholder="Phone Number" type="text" name="phone" required style={{'left': '52.65%',
    
      'right': '14.29%',
    'marginTop': '2rem',
      "width":"70%",
    "marginLeft":"4.5rem",
      'padding':'0.6rem',
      // bottom: 22.47%;
      
      'background': '#1B1D20',
      'boxShadow': 'inset -4px -4px 8px #27292D, inset 4px 4px 8px #070809',
      'borderRadius': '5px'}}/>




      </ul>
  
  <ul>
  <input placeholder="E-Mail" type="text" name="phone" required style={{'left': '52.65%',
    'right': '14.29%',
    'top': '18%',
    "width":"70%",
    'marginTop': '2rem',
    "marginLeft":"4.5rem",
    'padding':'0.6rem',
    // bottom: 22.47%;
    
    'background': '#1B1D20',
    'boxShadow': 'inset -4px -4px 8px #27292D, inset 4px 4px 8px #070809',
    'borderRadius': '5px'}}/>
</ul>
<ul>
<input type="submit" className="text" value="SUBMIT" style={{
  'left': '52.65%',
  'right': '14.29%',
  'top': '18%',
  "width":"70%",
  'marginTop': '2rem',
  "marginLeft":"4.5rem",
  'padding':'0.6rem',
  // bottom: 22.47%;
'background': '#B6F2CF',
 'boxShadow': '-4px -4px 8px #27292D, 4px 4px 8px #070809;',
'borderRadius': '5px'}}/>
</ul>
  
    
    </Boxx>
      </Title>
    
   
    </AboutSection>
  );
};

export default Email;
