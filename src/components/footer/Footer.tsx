import React from 'react'
import logo from "../../assets/f-logo.png"
import insta from "../../assets/f-insta.png"
import face from "../../assets/f-face.png"
import "../../sass/__footer.scss"
const Footer:React.FC = () => {
  return (
    <div className='footer__wrapper'>
        <div className="container">
            <div className="footer__section-top">
                <div className="footer__top-links1">
                    <p>ALL PRODUCTS</p>
                    <span></span>
                    <p>ABOUT SEEDRA</p>
                    <span></span>
                    <p>OUR BLOG</p>
                </div>
                <div className="footer__top-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer__top-links2">
                    <p>Terms&Conditions</p>
                    <span></span>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className="footer__section-bottom">
                <div className="footer__bottom-media">
                    <img src={insta} alt="" />
                    <img src={face} alt="" />
                </div>
                <p>All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer