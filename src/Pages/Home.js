//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn
} from 'react-scroll-motion';
import Hero from "../Sections/Hero/index";
import About from "../Sections/About/index";
import { Parallax } from "react-parallax";
import Logo from '../../src/assets/logo.png';
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Footer from "../Sections/Footer/Footer";
import Boxes from "../Sections/Boxes";
import Email from "../Sections/Email/index"
import Maps from "../Sections/Maps/index";

import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import './Home.css';
import Phone from '../Sections/Phone';
import Second from '../Sections/Second';
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move())
const Container = styled.div`
 
  background-color: black;
 
  
`;

const Home = () => {
  return (
    <Container>
    <ScrollContainer>
      <ScrollPage >
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
        <Hero/>
        </Animator>
      </ScrollPage>

  <Phone/>
  

  <ScrollPage >
  <div className='section-3'>
  <Animator animation={batch(Fade(), Sticky())}>
  <Second />
  </Animator>
  </div>
</ScrollPage>
      

      
         <Services/>
       

      

     
         <Boxes/>
         <Email/>
         <Maps/>
         <Footer />
      </ScrollContainer>
      </Container>
  );
}

export default Home;
