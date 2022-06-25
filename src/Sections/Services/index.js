// import gsap from "gsap";
// import { useEffect, useRef } from "react";
// import styled from "styled-components";
// import { Parallax } from "react-parallax";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Tube from "../../assets/3dtube.png";
// import Cone from "../../assets/3dtriangle.png";
// import Capsule from "../../assets/3dcapsule.png";
// import Bluetooth from "../../assets/Bluetooth.svg"
// import TextBlock from "../../components/TextBlock";
// import SvgBlock from "../../components/SvgBlock";
// import Mind from "../../assets/Mind.svg"

// // const TextBlock = lazy(() => import("../../components/TextBlock"));
// // const SvgBlock = lazy(() => import("../../components/SvgBlock"));

// const ServiceSection = styled.section`
//   width: 100vw;
//    background-color: black; 
//   display: flex;
//   flex-direction: column;
//   /* justify-content: center; */
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   // padding-top: 20rem;
// `;

// const Background = styled.div`
//   // display: flex;
//   // flex-direction: column;
//   // align-items: center;
//   // position: absolute;
//   // top: 0;
//   // left: 0;
//   // bottom: 0;
//   // width: 100vw;
//   // height: 85vh;
//   // z-index: -1;
//   // background-color: #0a0b10;
//   // background-size: auto 100vh;
//   // background-repeat: no-repeat;
// `;

// const Title = styled.h1`
//   color: var(--white);
//   display: inline-block;
//   font-size: 2rem;
//   /* margin-top: 4rem; */
//   margin-top: 1rem;
//   position: relative;
//   &::before {
//     content: "";
//     height: 1px;
//     width: 50%;
//     position: absolute;
//     left: 50%;
//     bottom: 0;
//     transform: translate(-50%, 0.5rem);
//     /* or 100px */
//     border-bottom: 2px solid var(--pink);
//   }
// `;

// const Line = styled.span`
//   // border-left: 4px solid var(--background);
//   // height: 15rem;
//   // margin-top: 2rem;
//   // border-radius: 20px 20px 0 0;
// `;

// const Triangle = styled.span`
//   width: 0;
//   height: 0;
//   border-left: 1.2rem solid transparent;
//   border-right: 1.2rem solid transparent;
//   border-top: 2rem solid var(--background);
// `;

// const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 10rem 10rem;
//   /* margin-bottom: 10rem; */
//   position: relative;
//   @media only Screen and (max-width: 64em) {
//     margin: 10rem calc(4rem + 5vw);
//   }
//   @media only Screen and (max-width: 48em) {
//     display: block;
//     &:last-child {
//       margin-bottom: 2rem;
//     }
//   }
//   @media only Screen and (max-width: 40em) {
//     margin: 10rem calc(2rem + 3vw);
//     &:last-child {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// const OBJ = styled.div`
//   position: absolute;
//   top: 80%;
//   right: 35%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 20vw;
//   /* z-index: 1; */

//   @media only Screen and (max-width: 48em) {
//     opacity: 0.5;
//   }
// `;

// const Services = () => {
//   const ref = useRef(null);
//   gsap.registerPlugin(ScrollTrigger);
//   const revealRefs = useRef([]);
//   revealRefs.current = [];

//   useEffect(() => {
//     const element = ref.current;
//     ////
//     const mq = window.matchMedia("(max-width: 48em)");
//     const t1 = gsap.timeline({
//       scrollTrigger: {
//         // trigger: document.getElementById("services"),

//         // start: "top top",

//         // end: "bottom bottom",

//         // pin: element,
//         // pinReparent: true,
//       },
//     });
//     t1.fromTo(
//       document.getElementById("line"),

//       {
//         height: "15rem",
//       },
//       {
//         height: "3rem",
//         duration: 2,
//         scrollTrigger: {
//           trigger: document.getElementById("line"),
//           start: "top top+=200",
//           end: "bottom top+=220",
//           scrub: true,
//         },
//       }
//     );

//     revealRefs.current.forEach((el, index) => {
//       // console.log(el.childNodes);
//       if (mq.matches) {
//         t1.from(
//           el.childNodes[0],

//           {
//             x: -300,
//             opacity: 0,
//             duration: 2,

//             ease: "power2",
//             scrollTrigger: {
//               id: `section-${index + 1}`,
//               trigger: el,
//               start: "top center+=200",
//               end: "bottom bottom-=100",
//               scrub: true,
//               snap: true,
//               //
//               // toggleActions: "play none none reverse",
//             },
//           }
//         )
//           .to(el.childNodes[1], {
//             transform: "scale(0)",

//             ease: "power2.inOut",

//             scrollTrigger: {
//               id: `section-${index + 1}`,
//               trigger: el.childNodes[1],
//               start: "top center",
//               end: "bottom center",
//               scrub: true,
//               snap: true,

//               // toggleActions: "play none none reverse",
//             },
//           })
//           .from(
//             el.childNodes[2],

//             {
//               y: 400,

//               duration: 2,

//               ease: "power2",
//               scrollTrigger: {
//                 id: `section-${index + 1}`,
//                 trigger: el,
//                 start: "top center+=100",
//                 end: "bottom bottom-=200",
//                 scrub: true,
//                 snap: true,
//                 //
//                 // toggleActions: "play none none reverse",
//               },
//             }
//           )
//           .to(
//             el,

//             {
//               opacity: 0,

//               ease: "power2",
//               scrollTrigger: {
//                 id: `section-${index + 1}`,
//                 trigger: el,
//                 start: "top top+=300",
//                 end: "center top+=300",
//                 scrub: true,
//               },
//             }
//           );
//       } else {
//         t1.from(
//           el.childNodes[0],

//           {
//             x: -300,
//             opacity: 0,
//             duration: 2,

//             ease: "power2",
//             scrollTrigger: {
//               id: `section-${index + 1}`,
//               trigger: el,
//               start: "top center+=100",
//               end: "bottom bottom-=200",
//               scrub: true,
//               snap: true,
//               //
//               // toggleActions: "play none none reverse",
//             },
//           }
//         )
//           .to(el.childNodes[1], {
//             transform: "scale(0)",

//             ease: "power2.inOut",

//             scrollTrigger: {
//               id: `section-${index + 1}`,
//               trigger: el.childNodes[1],
//               start: "top center",
//               end: "bottom center",
//               scrub: true,
//               snap: true,

//               // toggleActions: "play none none reverse",
//             },
//           })
//           .from(
//             el.childNodes[2],

//             {
//               y: 400,

//               duration: 2,

//               ease: "power2",
//               scrollTrigger: {
//                 id: `section-${index + 1}`,
//                 trigger: el,
//                 start: "top center+=100",
//                 end: "bottom bottom-=200",
//                 scrub: true,
//                 snap: true,
//                 //
//                 // toggleActions: "play none none reverse",
//               },
//             }
//           )
//           .to(
//             el,

//             {
//               opacity: 0,

//               ease: "power2",
//               scrollTrigger: {
//                 id: `section-${index + 1}`,
//                 trigger: el,
//                 start: "top top+=200",
//                 end: "center top+=300",
//                 scrub: true,
//               },
//             }
//           );
//       }
//     });
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !revealRefs.current.includes(el)) {
//       revealRefs.current.push(el);
//     }
//   };
//   return (
    
//     <ServiceSection id="services">
//       <Background ref={ref}>
//         <Title className="title"></Title>
//         <Line id="line" />
//         <Triangle id="triangle" />
//       </Background>
//       <Parallax strength={300} >
//       <Content>
//       <TextBlock
//         topic="Support"
//         title={<h1>Timer Based Charging</h1>}
//         subText={
//           <h5>
         
//           </h5>
//         }
//       />
//       <OBJ>
//         <img src={''} alt="Capsule Object" width="400" height="400" />
//       </OBJ>
//       <SvgBlock svg="Timer.svg" />
//     </Content>
//     </Parallax>
//     <Parallax strength={300} >
//          <Content>
//         <TextBlock
//           topic="Support"
//           title={<h1>Bluetooth Charging</h1>}
//           subText={
//             <h5>
//            Charger fast
//             </h5>
//           }
//         />
//         <OBJ>
//           <img src={''} alt="Capsule Object" width="400" height="400" />
//         </OBJ>
//         <SvgBlock svg="Bluetooth.svg" />
//       </Content>
//       </Parallax>
//       <Parallax strength={300} >
//       <Content>
//         <TextBlock
//           topic="Support"
//           title={<h1>Timer Based Charging</h1>}
//           subText={
//             <h5>
           
//             </h5>
//           }
//         />
//         <OBJ>
//           <img src={''} alt="Capsule Object" width="400" height="400" />
//         </OBJ>
//         <SvgBlock svg="Timer.svg" />
//       </Content>
//       <Content>
//       <TextBlock
//         topic="Support"
//         title={<h1>Timer Based Charging</h1>}
//         subText={
//           <h5>
         
//           </h5>
//         }
//       />
//       <OBJ>
//         <img src={''} alt="Capsule Object" width="400" height="400" />
//       </OBJ>
//       <SvgBlock svg="Mind.svg" />
//     </Content>
//     </Parallax>
//      <Content>
//         <TextBlock
//           topic="Support"
//           title={<h1>Timer Based Charging</h1>}
//           subText={
//             <h5>
           
//             </h5>
//           }
//         />
//         <OBJ>
//           <img src={''} alt="Capsule Object" width="400" height="400" />
//         </OBJ>
//         <SvgBlock svg="Timer.svg" />
//       </Content>

//   <Content ref={addToRefs}>
//   <TextBlock
//     topic="Control"
//     title={<h1>App based control</h1>}
//     subText={
//       <h5>
     
//       </h5>
//     }
//   />
//   <OBJ>
//     <img src={''} alt="Tube Object" width="400" height="400" />
//   </OBJ>
//   <SvgBlock svg="Design.svg" />
// </Content>

// <Content ref={addToRefs}>



// </Content>
//     </ServiceSection>
//   );
// };

// export default Services;


// import gsap from "gsap";
// import { useEffect, useRef } from "react";
// import styled from "styled-components";
// import { Parallax } from "react-parallax";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Tube from "../../assets/3dtube.png";
// import Cone from "../../assets/3dtriangle.png";
// import Capsule from "../../assets/3dcapsule.png";
// import Bluetooth from "../../assets/Bluetooth.svg"
// import TextBlock from "../../components/TextBlock";
// import SvgBlock from "../../components/SvgBlock";
// import Mind from "../../assets/Mind.svg"
// import {
//   Animator,
//   batch,
//   Fade,
//   FadeIn,
//   Move,
//   MoveIn,
//   MoveOut,
//   ScrollContainer,
//   ScrollPage,
//   Sticky,
//   StickyIn,
//   ZoomIn
// } from 'react-scroll-motion';
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Sticky(), Move())

// // const TextBlock = lazy(() => import("../../components/TextBlock"));
// // const SvgBlock = lazy(() => import("../../components/SvgBlock"));

// const ServiceSection = styled.section`
//   width: 100vw;
//    background-color: black; 
//   display: flex;
//   flex-direction: column;
//   /* justify-content: center; */
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   // padding-top: 20rem;
// `;

// const Background = styled.div`
//   // display: flex;
//   // flex-direction: column;
//   // align-items: center;
//   // position: absolute;
//   // top: 0;
//   // left: 0;
//   // bottom: 0;
//   // width: 100vw;
//   // height: 85vh;
//   // z-index: -1;
//   // background-color: #0a0b10;
//   // background-size: auto 100vh;
//   // background-repeat: no-repeat;
// `;

// const Title = styled.h1`
//   color: var(--white);
//   display: inline-block;
//   font-size: 2rem;
//   /* margin-top: 4rem; */
//   margin-top: 1rem;
//   position: relative;
//   &::before {
//     content: "";
//     height: 1px;
//     width: 50%;
//     position: absolute;
//     left: 50%;
//     bottom: 0;
//     transform: translate(-50%, 0.5rem);
//     /* or 100px */
//     border-bottom: 2px solid var(--pink);
//   }
// `;

// const Line = styled.span`
//   // border-left: 4px solid var(--background);
//   // height: 15rem;
//   // margin-top: 2rem;
//   // border-radius: 20px 20px 0 0;
// `;

// const Triangle = styled.span`
//   width: 0;
//   height: 0;
//   border-left: 1.2rem solid transparent;
//   border-right: 1.2rem solid transparent;
//   border-top: 2rem solid var(--background);
// `;

// const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 10rem 10rem;
//   /* margin-bottom: 10rem; */
//   position: relative;
//   @media only Screen and (max-width: 64em) {
//     margin: 10rem calc(4rem + 5vw);
//   }
//   @media only Screen and (max-width: 48em) {
//     display: block;
//     &:last-child {
//       margin-bottom: 2rem;
//     }
//   }
//   @media only Screen and (max-width: 40em) {
//     margin: 10rem calc(2rem + 3vw);
//     &:last-child {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// const OBJ = styled.div`
//   position: absolute;
//   top: 80%;
//   right: 35%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 20vw;
//   /* z-index: 1; */

//   @media only Screen and (max-width: 48em) {
//     opacity: 0.5;
//   }
// `;

// const Services = () => {
//   const ref = useRef(null);
//   gsap.registerPlugin(ScrollTrigger);
//   const revealRefs = useRef([]);
//   revealRefs.current = [];

//   useEffect(() => {
//     const element = ref.current;
//     ////
//     const mq = window.matchMedia("(max-width: 48em)");
//     const t1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: document.getElementById("services"),

//         start: "top top+=180",

//         end: "bottom bottom",

//         pin: element,
//         pinReparent: true,
//       },
//     });
//     t1.fromTo(
//       document.getElementById("line"),

//       {
//         height: "15rem",
//       },
//       {
//         height: "3rem",
//         duration: 2,
//         scrollTrigger: {
//           trigger: document.getElementById("line"),
//           start: "top top+=200",
//           end: "bottom top+=220",
//           scrub: true,
//         },
//       }
//     );

//     revealRefs.current.forEach((el, index) => {
//       // console.log(el.childNodes);
//       if (mq.matches) {
//         t1.from(
//           el.childNodes[0],

//           {
//             x: -300,
//             opacity: 0,
//             duration: 2,

//             ease: "power2",
//             scrollTrigger: {
//               id: `section-${index + 1}`,
//               trigger: el,
//               start: "top center+=200",
//               end: "bottom bottom-=100",
//               scrub: true,
//               snap: true,
//               //
//               // toggleActions: "play none none reverse",
//             },
//           }
//         )
//           .to(el.childNodes[1], {
//             transform: "scale(0)",

//             ease: "power2.inOut",

//             scrollTrigger: {
//               id: `section-${index + 1}`,
//               trigger: el.childNodes[1],
//               start: "top center",
//               end: "bottom center",
//               scrub: true,
//               snap: true,

//               // toggleActions: "play none none reverse",
//             },
//           })
//           .from(
//             el.childNodes[2],

//             {
//               y: 400,

//               duration: 2,

//               ease: "power2",
//               scrollTrigger: {
//                 id: `section-${index + 1}`,
//                 trigger: el,
//                 start: "top center+=100",
//                 end: "bottom bottom-=200",
//                 scrub: true,
//                 snap: true,
//                 //
//                 // toggleActions: "play none none reverse",
//               },
//             }
//           )
//           .to(
//             el,

//             {
//               opacity: 0,

//               ease: "power2",
//               scrollTrigger: {
//                 id: `section-${index + 1}`,
//                 trigger: el,
//                 start: "top top+=300",
//                 end: "center top+=300",
//                 scrub: true,
//               },
//             }
//           );
//       } else {
//         t1.from(
//           el.childNodes[0],

//           {
//             x: -300,
//             opacity: 0,
//             duration: 2,

//             ease: "power2",
//             scrollTrigger: {
//               id: `section-${index + 1}`,
//               trigger: el,
//               start: "top center+=100",
//               end: "bottom bottom-=200",
//               scrub: true,
//               snap: true,
//               //
//               // toggleActions: "play none none reverse",
//             },
//           }
//         )
//           .to(el.childNodes[1], {
//             transform: "scale(0)",

//             ease: "power2.inOut",

//             scrollTrigger: {
//               id: `section-${index + 1}`,
//               trigger: el.childNodes[1],
//               start: "top center",
//               end: "bottom center",
//               scrub: true,
//               snap: true,

//               // toggleActions: "play none none reverse",
//             },
//           })
//           .from(
//             el.childNodes[2],

//             {
//               y: 400,

//               duration: 2,

//               ease: "power2",
//               scrollTrigger: {
//                 id: `section-${index + 1}`,
//                 trigger: el,
//                 start: "top center+=100",
//                 end: "bottom bottom-=200",
//                 scrub: true,
//                 snap: true,
//                 //
//                 // toggleActions: "play none none reverse",
//               },
//             }
//           )
//           .to(
//             el,

//             {
//               opacity: 1,

//               ease: "power2",
//               scrollTrigger: {
//                 id: `section-${index + 1}`,
//                 trigger: el,
//                 start: "top top+=200",
//                 end: "center top+=300",
//                 scrub: true,
//               },
//             }
//           );
//       }
//     });
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !revealRefs.current.includes(el)) {
//       revealRefs.current.push(el);
//     }
//   };
//   return (
    
//     <ServiceSection id="services">
//       <Background ref={ref}>
//         <Title className="title"></Title>
//         <Line id="line" />
//         <Triangle id="triangle" />
//       </Background>
     
//       <Content>
//       <TextBlock
//         topic="Support"
//         title={<h1>Timer Based Charging</h1>}
//         subText={
//           <h5>
         
//           </h5>
//         }
//       />
//       <OBJ>
//         <img src={''} alt="Capsule Object" width="400" height="400" />
//       </OBJ>
//       <SvgBlock svg="Timer.svg" />
//     </Content>
 
  
//     <Parallax strength={300} >
//          <Content>
//         <TextBlock
//           topic="Support"
//           title={<h1>Bluetooth Charging</h1>}
//           subText={
//             <h5>
//            Charger fast
//             </h5>
//           }
//         />
//         <OBJ>
//           <img src={''} alt="Capsule Object" width="400" height="400" />
//         </OBJ>
//         <SvgBlock svg="Bluetooth.svg" />
//       </Content>
//       </Parallax>
//       <Parallax strength={300} >
//       <Content>
//         <TextBlock
//           topic="Support"
//           title={<h1>Timer Based Charging</h1>}
//           subText={
//             <h5>
           
//             </h5>
//           }
//         />
//         <OBJ>
//           <img src={''} alt="Capsule Object" width="400" height="400" />
//         </OBJ>
//         <SvgBlock svg="Timer.svg" />
//       </Content>
//       <Content>
//       <TextBlock
//         topic="Support"
//         title={<h1>Timer Based Charging</h1>}
//         subText={
//           <h5>
         
//           </h5>
//         }
//       />
//       <OBJ>
//         <img src={''} alt="Capsule Object" width="400" height="400" />
//       </OBJ>
//       <SvgBlock svg="Mind.svg" />
//     </Content>
//     </Parallax>
//      <Content>
//         <TextBlock
//           topic="Support"
//           title={<h1>Timer Based Charging</h1>}
//           subText={
//             <h5>
           
//             </h5>
//           }
//         />
//         <OBJ>
//           <img src={''} alt="Capsule Object" width="400" height="400" />
//         </OBJ>
//         <SvgBlock svg="Timer.svg" />
//       </Content>

  

// <Content ref={addToRefs}>



// </Content>

//     </ServiceSection>
   
//   );
// };

// export default Services;


import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

// const TextBlock = lazy(() => import("../../components/TextBlock"));
// const SvgBlock = lazy(() => import("../../components/SvgBlock"));

const ServiceSection = styled.section`
  width: 100vw;
  background-color: black; 
  display: flex;
  // top:-250px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: black;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    ////
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),

        start: "top top+=180",

        end: "bottom bottom",

        pin: element,
        pinReparent: true,
      },
    });
    t1.fromTo(
      document.getElementById("line"),

      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      // console.log(el.childNodes);
      if (mq.matches) {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=100",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      } else {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=200",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <ServiceSection>
      <Background ref={ref}>
      
        
      </Background>

      <Content ref={addToRefs}>
     
        <TextBlock
      
          title={<h1>IOT Enabled Smart Charge Point</h1>}
          subText={
            <h5>
             
            </h5>
          }
        />
        
        <SvgBlock svg="Mind.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
        
          title={<h1>Bluetooth Charging</h1>}
          subText={
            <h5>
            
            </h5>
          }
        />
      
        <SvgBlock svg="Bluetooth.svg" />
      </Content>
      <Content ref={addToRefs}>
      <TextBlock
      
        title={<h1>Timer Based Charging</h1>}
        subText={
          <h5>
          
          </h5>
        }
      />
    
      <SvgBlock svg="Timer.svg" />
    </Content>
   
      <Content ref={addToRefs}>
     
      <TextBlock
    
        title={<h1>Intelligent Charging Process </h1>}
        subText={
          <h5>
           
          </h5>
        }
      />
      
      <SvgBlock svg="Mind.svg" />
    </Content>
    <Content ref={addToRefs}>
    <TextBlock
    
      title={<h1>Charge Analytics</h1>}
      subText={
        <h5>
        
        </h5>
      }
    />
  
    <SvgBlock svg="Analytics.svg" />
  </Content>
<Content ref={addToRefs}>
     
<TextBlock

  title={<h1>App Based Control</h1>}
  subText={
    <h5>
     
    </h5>
  }
/>

<SvgBlock svg="App.svg" />
</Content>
    </ServiceSection>
  );
};

export default Services;