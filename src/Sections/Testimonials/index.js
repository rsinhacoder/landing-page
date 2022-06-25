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
const Stitle = styled.h3`position: absolute;
position: absolute;
width: 296px;
height: 50px;
left: 5px;
top: 125px;
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
top: 145px;
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
top: 50px;
color: white;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 50px;
/* identical to box height */


color: #FFFFFF;

`;

const Boxx = styled.div`position: absolute;
width: 841px;
height: 234px;
left: 300px;
top: 50x;
color:white;
background: inherit;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;
border-radius: 12.446px;`;
const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
    <AboutSection id="about">
    <Waves src={wave} alt="" />
      <Title>How it works!
      <Stitle>Charging your EVs has never

      </Stitle>
      <Stitle2> been more convenient</Stitle2>
      <Boxx>
    Hello
    </Boxx>
      </Title>
    
   
    </AboutSection>
  );
};

export default Testimonials;
