import React from 'react'
import styled, { keyframes } from "styled-components";
// import Rectangle from "../../assets/Rectangle.svg";
// import './index.css';

import Rectangle1 from "../../assets/Rectangle1.svg";
import Rectangle2 from "../../assets/Rectangle2.svg";
const Intro = styled.div`position: absolute;
width: 200px;
height: 21px;
left: 125px;
 top: 230.44px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
letter-spacing: 0.04em;

color: #FFFFFF;`;
const Rec1= styled.div`position: absolute;
width: 753.88px;
height: 673.82px;
left: 908.51px;
// top: 1721px;
opacity:1;
// background: url(.png);
transform: rotate(15deg);`;
const Intro2 = styled.div`position: absolute;
width: 438px;
height: 110px;
left: 119px;
 top: 263.44px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 50px;

color: #FFFFFF;`;

const Intro3 = styled.div`position: absolute;
width: 568px;
height: 74px;
left: 119px;
//  top: 2208.44px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 24px;
letter-spacing: 0.04em;

color: #FFFFFF;`;
const Second = () => {
  return (
    <div>
    <div>
<img src={Rectangle1} alt="" width="50" height="50" left="2rem" />
</div>
    <Intro>
Introducing Charge</Intro>
<Intro2>Charge your EV.
Anytime Anywhere!</Intro2>
<Intro3></Intro3>


</div>
  )
}

export default Second