import React  from 'react'
import logo from "../../assets/logo.png"
import insta from "../../assets/h-insta.png"
import face from "../../assets/h-face.png"
import search from "../../assets/search.png"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../../sass/__header.scss"
import { Link } from 'react-router-dom'


const Header:React.FC = () => {
  return (
    <div className='header__wrapper'>
        <div className="container">
            <div className="header__section">
                <div className="header__section-logo">
                   <img src={logo} alt="" />
                </div>
                <div className="header__section-links">
                    <div className="header__links">
                        <a href="#">ALL PRODUCTS</a>
                        <span></span>
                        <a href="#">ABOUT SEEDRA</a>
                        <span></span>
                        <a href="">OUR BLOG</a>
                        <span></span>
                        <Link to={"contact"}>CONTACTS</Link>
                    </div>
                    <div className="header__search">
                        <img src={insta} alt="img" />
                        <img src={face} alt="img" />
                        <div>
                            <img src={search} alt="" />
                            <input type="text" placeholder='Search' />
                        </div>
                    </div>
                </div>
                <div className="header__section-shop">
                <FaRegHeart />
                <MdOutlineShoppingCart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header