import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Greenkilometer from "../../assets/Greenkilometer.svg";
import Energy from "../../assets/Energy.svg";
import Timer from "../../assets/Timer.svg";
import green from "../../assets/green3.png";
import green2 from "../../assets/secure.png";
import customer from "../../assets/Phone.webp";
import Carbon from "../../assets/Carbon.svg";
import mobile from "../../assets/mobile.svg";
import Human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";
import Charge from "../../assets/Chargel.svg";
import Objects from "../../assets/Objects.svg";
import rocket from "../../assets/rocket image.png";
import './card.css';
import styled, { keyframes } from "styled-components";
const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;
const AboutF =styled.div`position: absolute;


font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 20px;
text-align: center;
letter-spacing: 0.04em;

color: #EEEEEE;
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
function Phone() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: require('./office.json')
    })
  }, [])
  
  return (
    <body>
 <section class="card-list">
 
 <article class="card">
      <p>
      <div class="tags">
      
          <a >Time Efficient</a>
          
        </div>
        </p>
        <header class="card-header">
       
        
        
        <img src={Energy}   />
      
      

      <div class="author-name">
        <div class="author-name-prefix"></div>
        
      </div>
    
          <AboutF></AboutF>
        </header>

        
       
      </article>


      <article class="card">
      <p>
      <div class="tags">
      
          <a >Carbon Efficient</a>
          
        </div>
        </p>
        <header class="card-header">
       
        
        
        <img src={Carbon}   />
      
      

      <div class="author-name">
        <div class="author-name-prefix"></div>
        
      </div>
    
          <AboutF></AboutF>
        </header>

        
       
      </article>




      <article class="card">
 <p>
 <div class="tags">
 
     <a >Green Kilometer</a>
     
   </div>
   </p>
   <header class="card-header">
  
   
   
   <img src={Greenkilometer}   />
 
 

 <div class="author-name">
   <div class="author-name-prefix"></div>
   
 </div>

     <AboutF></AboutF>
   </header>

   
  
 </article>

      <article class="card">
      <p>
      <div class="tags">
      
          <a >Fast Charging</a>
          
        </div>
        </p>
        <header class="card-header">
       
        
        
        <img src={Charge}   />
      
      

      <div class="author-name">
        <div class="author-name-prefix"></div>
        
      </div>
    
          <AboutF></AboutF>
        </header>

        
       
      </article>

      <article class="card">
      <p>
      <div class="tags">
      
          <a >App Based</a>
          
        </div>
        </p>
        <header class="card-header">
       
        
        
        <img src={green} width="80%"  />
      
      

      <div class="author-name">
        <div class="author-name-prefix"></div>
        
      </div>
    
          <AboutF></AboutF>
        </header>

        
       
      </article>
      <article class="card">
      <p>
      <div class="tags">
      
          <a >secure</a>
          
        </div>
        </p>
        <header class="card-header">
       
        
        
        <img src={green2}   />
      
      

      <div class="author-name">
        <div class="author-name-prefix"></div>
        
      </div>
    
          <AboutF></AboutF>
        </header>

        
       
      </article>

      <article class="card">
      <p>
      <div class="tags">
      
          <a >Satisfaction Guaranteed</a>
          
        </div>
        </p>
        <header class="card-header">
       
        
        
        <img src={hand}   />
      
      

      <div class="author-name">
        <div class="author-name-prefix"></div>
        
      </div>
    
          <AboutF></AboutF>
        </header>

        
       
      </article>


 </section>
  </body>
  );
}

export default Phone;