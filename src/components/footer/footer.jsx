import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import PageContainer from "../pageContainer/PageContianer";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="P-footer">
            <PageContainer>
              <div className="G-flex G-flex-column G-align-items">
              <ul className="P-menu-items">
                    <li className="P-menu-link">Terms Of Use</li>
                    <li className="P-menu-link">Privacy-Policy</li>
                    <li className="P-menu-link">About</li>
                    <li className="P-menu-link">Blog</li>
                    <li className="P-menu-link">FAQ</li>
                </ul>
                <div className="P-info-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="P-social-icons G-flex G-align-center G-justify-center">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
              </div>
            
            </PageContainer>
        </footer>
    );
};

export default Footer;