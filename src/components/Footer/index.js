import styled from "styled-components";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";

const FOOTER = styled.footer`
position: absolute;
width: 1512px;
height: 495px;
left: 0px;
top: 7920px;

background: #000000;
border-radius: 40px 40px 0px 0px;
`;

const RightText = styled.div`
position: absolute;
width: 392px;
height: 30px;
left: 943px;
top: 8040px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 30px;
/* identical to box height */

letter-spacing: 0.02em;

color: #CACACA;
`;
const LeftText = styled.div`
  
position: absolute;
width: 318px;
height: 117px;
left: 150px;
top: 8101px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 24px;

color: #EEEEEE;
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
      We at powerstrip, are on a mission to make India an EV-focused nation by developing a deeply integrated network of charge points.{" "}
        <a href="https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA">
          @powerstrip
        </a>
      </LeftText>
      <RightText>
        Reach out to us at{" "}
        <a href="https://twitter.com/code_bucks">
          <img src={Twitter} alt="Twitter" />
        </a>
        &nbsp;
        <a href="https://www.instagram.com/code.bucks/">
          <img src={Instagram} alt="Instagram" />
        </a>
        &nbsp;
        <a href="mailto:codebucks27@gmail.com?subject=Email From Your Website">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;

//© 2021 by CodeBucks. Design by @CodeBucks.
