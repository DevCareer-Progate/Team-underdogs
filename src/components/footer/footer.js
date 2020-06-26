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
        <div className='container'>
          <div className='row' style={{ paddingTop: '60px' }}>
            <div className='col-sm-12 col-md-3 col-lg-3 '>
              <div className='logo'>
                <img src={logoDark} alt='logo' />
              </div>
              <div className='msg'>
                <p style={{ color: '#A2A2A2' }}>
                  {' '}
                  Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce
                  eu rhoncus augue. Fusce vel metus pharetra, fermentum
                </p>
              </div>
              <div className='social__media'>
                <div className='socials'>
                  <img
                    className='img-fluid my-2 mr-3'
                    src={googleSvg}
                    alt='google'
                  />
                  <img
                    className='img-fluid my-2 mr-3'
                    src={facebookSvg}
                    alt='facebook'
                  />
                  <img
                    className='img-fluid my-2 mr-3'
                    src={twitterSvg}
                    alt='twitter'
                  />
                  <img
                    className='img-fluid my-2'
                    src={instagramSvg}
                    alt='instagram'
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-3 col-lx-3'>
              <h2 style={{ color: '#FFFFFF' }}>CoinBase Links</h2>
              <div className='links'>
                <ul>
                  <li>
                    <Link style={{ color: '#A2A2A2' }} href='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: '#A2A2A2' }} href='/about'>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: '#A2A2A2' }} href='/blog'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: '#A2A2A2' }} href='/sell'>
                      Sell
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: '#A2A2A2' }} href='/contact'>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-12 col-md-3 col-xl-3'>
              <h2 style={{ color: '#FFFFFF' }}>Contact Us</h2>
              <div className='mails'>
                <p style={{ color: '#A2A2A2' }}>(+234) 137632128</p>
                <Link to='/'>
                  <p style={{ color: '#A2A2A2' }}>Coinbase@yahoo.com</p>
                </Link>
                <p style={{ color: '#A2A2A2' }}>Address goes here</p>
              </div>
              <p style={{ color: '#A2A2A2' }}>Download Our App</p>
            </div>
            <div className='col-sm-12 col-md-3 col-lx-3'>
              <h2 style={{ color: '#FFFFFF' }}>CoinBase Instagram</h2>
              <div className='boxes'>
                <div className='box'></div>
                <div className='box'>+</div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='copyright'>
            <p style={{ color: '#A2A2A2' }}  className='text mt-5'>&#169; 2019  Designed by Cr8tiv_yemmy, Developed by Team-Underdogs</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
