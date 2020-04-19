import React from "react";
import {Footer, FooterList,FooterUl, FooterLi, FooterCompany,FooterSocials, FooterRights} from './styles.js';
import logo from '../Navbar/Img/logo.png';
import linked from './img/linkedin-icon-logo-vector.png';
import fb from './img/FB-logo-1.webp';
import twitter from './img/twitter-icon-square-logo-preview-400x400.png';

export default function FooterHome () {
    return(
      <Footer>
          <FooterCompany>
              <img src={logo} alt='logo'/>
              Your best car experience
          </FooterCompany>
          <FooterList>
              <FooterUl>
                  <FooterLi>Home</FooterLi>
                  <FooterLi>Cars</FooterLi>
                  <FooterLi>About us</FooterLi>
                  <FooterLi>Contact</FooterLi>
                  <FooterLi>Log in</FooterLi>
              </FooterUl>
          </FooterList>
          <FooterSocials>
              Socials:
              <img src={linked} alt="linked"/>
              <img src={fb} alt="Facebook"/>
              <img src={twitter} alt="Twitter"/>
          </FooterSocials>
          <FooterRights>
              © 2020 CarRent. This page is done only for learning issues.
          </FooterRights>
      </Footer>
    );
}

