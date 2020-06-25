import React, { Component } from 'react'

// Logo Import
import logoDark from '../../assets/images/common/logo-dark.svg'
import googleSvg from '../../assets/images/common/Google+.svg'
import facebookSvg from '../../assets/images/common/Facebook.svg'
import twitterSvg from '../../assets/images/common/Twitter.svg'
import instagramSvg from '../../assets/images/common/Instagram.svg'
import './footer.css'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="container">
          <div className="row" style={{ paddingTop: '60px'}}>
            <div className="col-sm-12 col-md-3 col-lg-3 ">
              <div className="logo">
                <img src={logoDark} alt='logo' />
              </div>
              <div className="msg">
                <p> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum</p>
              </div>
              <div className="social__media">
                      <div className="socials">
                        <img  className="img-fluid mt-3 mr-3" src={googleSvg} alt="google"/>
                        <img className="img-fluid mt-3 mr-3"  src={facebookSvg} alt="facebook"/>
                        <img className="img-fluid mt-3 mr-3"  src={twitterSvg} alt="twitter"/>
                        <img className="img-fluid mt-3"  src={instagramSvg} alt="instagram"/>
                      </div> 
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lx-3">
              <h2 style={{color:'#FFFFFF'}}>CoinBase Links</h2>
              <div className="links">
                <ul>
                  <li><a style={{color:'#212529'}} href="/">Home</a></li>
                  <li><a style={{color:'#212529'}} href="/about">About Us</a></li>
                  <li><a style={{color:'#212529'}} href="/blog">Blog</a></li>
                  <li><a style={{color:'#212529'}} href="/sell">Sell</a></li>
                  <li><a style={{color:'#212529'}} href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-xl-3">
              <h2 style={{color:'#FFFFFF'}}>Contact Us</h2>
              <div className="mails">
                <p>(+234) 137632128</p>
                <Link to="/"><p style={{color:'#212529'}}>Coinbase@yahoo.com</p></Link>
                <p>Address goes here</p>
              </div>
              <p>Download Our App</p>
            </div>
            <div className="col-sm-12 col-md-3 col-lx-3">
              <h2 style={{color:'#FFFFFF'}}>CoinBase Instagram</h2>
              <div className="boxes">
                <div className="box"></div>
                <div className="box">+</div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <p className="text mt-5">&#169; 2019  Designed by Team-Underdogs</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
