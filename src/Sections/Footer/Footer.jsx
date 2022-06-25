import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
// import { FooterOverlay } from '../../components';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => (
    <div className="app__footer section__padding" id="login">
    
  
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <img src={logo}  width='20%'/>
          <p className="p__opensans">We at powerstrip, are on a mission to make India an EV-focused nation by developing a deeply integrated network of charge points.<br /></p>
     
        </div>
  
        <div className="app__footer-links_logo">
        
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
         
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
  
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Legal Service</h1>
          <p className="p__opensans">Privacy policy</p>
          <p className="p__opensans">Refund policy</p>
          <p className="p__opensans">Terms of Service</p>
          <p className="p__opensans">About</p>

          <p className="p__opensans">+91 889-402-0310</p>    <p className="p__opensans">+91 889-402-0310</p>    
      
        </div>
      </div>
  
      <div className="footer__copyright">
        <p className="p__opensans">2022 Powerstrip. All Rights reserved.</p>
      </div>
  
    </div>
  );
export default Footer