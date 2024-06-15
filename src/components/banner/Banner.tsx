import React from 'react'
import img1 from "../../assets/mainimg1.png"
import banner from "../../assets/bann.png"
import dec1 from "../../assets/dec1.png"
import dec2 from "../../assets/dec2.png"
import dec3 from "../../assets/dec3.png"
import img2 from "../../assets/mainimg2.png"
import  "../../sass/__banner.scss"
const Banner:React.FC = () => {
  return (
    <div className='banner__wrapper'>
        <div className="container">
            <div className="banner__section">
                <div className="banner__section-one">
                    <div className="banner__one-info">
                        <h2>Seedra helps to grow fast and efficiant</h2>
                        <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
                        <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                        <p>  Your easy growing experience is our guarantee</p>
                        <p>Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                       <p> Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                    </div>
                    <div className="banner__one-img">
                        <div className='image'>
                            <img  src={img1} alt="" />
                        </div>
                        <span className='banner'>
                            <img src={banner} alt="" />
                        </span>
                        <span className='dec1'>
                            <img src={dec1} alt="" />
                        </span>
                        <span className='dec2'>
                            <img src={dec2} alt="" />
                        </span>
                        <span className='dec3'>
                            <img src={dec3} alt="" />
                        </span>
                    </div>
                </div>
                <div className="banner__section-two">
                    <div className="banner__two-img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="banner__two-info">
                        <h2>Our story</h2>
                        <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
                        <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                        <p>  Your easy growing experience is our guarantee</p>
                        <p>Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                        <p>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner