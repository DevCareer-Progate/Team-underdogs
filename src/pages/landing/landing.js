import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

// Assets
import heroImage from '../../assets/images/landing/hero-img.svg'
import aboutImage from '../../assets/images/landing/about-img.svg'
import blogImage from '../../assets/images/landing/blog-img.svg'
import bitcoinIcon from '../../assets/images/common/bitcoin.svg'
import giftcardIcon from '../../assets/images/common/gift-card-icon.svg'
import ethIcon from '../../assets/images/common/eth-icon.svg'
import bankIcon from '../../assets/images/common/bank-building.svg'
import arrowRight from '../../assets/images/common/arrow-right.svg'
import arrowLeft from '../../assets/images/common/arrow-left.svg'
import appleLogo from '../../assets/images/common/app-store-logo.svg'
import playStoreLogo from '../../assets/images/common/google-play-icon.svg'
import applePhone from '../../assets/images/landing/iphone-1.svg'
import androidPhone from '../../assets/images/landing/iphone-2.svg'
import phoneMask from '../../assets/images/landing/phones-mask.svg'

import './landing.css'

class Landing extends React.Component {
  state = {
    currentSlide: 0,
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '1.5rem',
      centerMode: true,
      focusOnSelect: true,
      afterChange: current => this.setState({ currentSlide: current }),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          },
        },
      ],
    }

    return (
      <div className='landing'>
        {/* Hero Section */}
        <div className='hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 hero-text'>
                <h3 className='heading'>
                  We provide easy solution to exchange your{' '}
                  <span>Bitcoin/GiftCard for money</span>
                </h3>

                <p className='text'>
                  CoinBase is a platform for trading your bitcoin and giftcard
                  at the best rate, why not give us a trial.
                </p>

                <button
                  className='secondary-btn'
                  type='button'
                  onClick={() => alert('hello')}
                >
                  GET STARTED
                </button>
              </div>
              <div className='col-md-6 hero-img'>
                <img src={heroImage} alt='Hero' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className='landing-about'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 about-img'>
                <img src={aboutImage} alt='' className='img-fluid' />
              </div>
              <div className='col-md-6 about-text'>
                <h3 className='heading'>Welcome to CoinBase</h3>
                <p className='text'>
                  We have the best rates. Simplyb start your exchange right now.
                  Sign up for our Affliate program and earn commission from each
                  exchange. The earnings are credited in your account instantly
                  and can be withdrawn right away. Also note some exchange
                  directions are hidden for unregistered users. To ensure to
                  have access to all our exchange directions and benefits kindly
                  sign up and verify your identity.
                </p>

                <button className='btn-login'>DISCOVER</button>
              </div>
            </div>
          </div>
        </div>

        {/* Trade Section */}
        <div className='trade'>
          <div className='container'>
            <div className='trade-container'>
              <div className='row'>
                <div className='col-md-4 trade-item'>
                  <h4 className='trade-head'>Our Rates</h4>
                  <div className='trade-content'>
                    {/* Bitcoin */}
                    <div className='bitcoin'>
                      <div className='trade-title'>
                        <img
                          className='trade-icon'
                          src={bitcoinIcon}
                          alt='Icon'
                        />
                        <span>BTC</span>
                      </div>
                      <div className='trade-desc'>
                        <p className='price'>
                          We Buy @ <span>₦350/$</span>
                        </p>
                        <p className='price'>
                          We Sell @ <span>₦370/$</span>
                        </p>
                      </div>
                    </div>

                    {/* Eth */}
                    <div className='eth'>
                      <div className='trade-title'>
                        <img className='trade-icon' src={ethIcon} alt='Icon' />
                        <span>ETH</span>
                      </div>
                      <div className='trade-desc'>
                        <p className='price'>
                          We Buy @ <span>₦345/$</span>
                        </p>
                        <p className='price'>
                          We Sell @ <span>₦370/$</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 trade-item'>
                  <h4 className='trade-head'>Our Reserves</h4>
                  <div className='trade-content'>
                    {/* Transfer */}
                    <div className='bitcoin'>
                      <div className='trade-title'>
                        <img className='trade-icon' src={bankIcon} alt='Icon' />
                        <span>Bank Transfer</span>
                      </div>
                      <div className='trade-desc'>
                        <p className='price'>
                          NGN <span>₦3544532.45/$</span>
                        </p>
                      </div>
                    </div>

                    {/* Bitcoin */}
                    <div className='bitcoin'>
                      <div className='trade-title'>
                        <img
                          className='trade-icon'
                          src={bitcoinIcon}
                          alt='Icon'
                        />
                        <span>Bitcoin</span>
                      </div>
                      <div className='trade-desc'>
                        <p className='price'>
                          <span>399.98</span> BTC
                        </p>
                      </div>
                    </div>

                    {/* Ethereum */}
                    <div className='bitcoin'>
                      <div className='trade-title'>
                        <img className='trade-icon' src={ethIcon} alt='Icon' />
                        <span>Ethereum</span>
                      </div>
                      <div className='trade-desc'>
                        <p className='price'>
                          <span>1000.00</span> ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 trade-item'>
                  <h4 className='trade-head'>Latest Exchanges</h4>
                  <span className='trade-badge'>8 hours ago</span>
                  <div className='trade-desc'>
                    <p className='price'>
                      Bitcoin BTC <img src={arrowRight} alt='Icon' /> Bank
                    </p>
                    <p className='price'>Transfer NGN</p>
                  </div>

                  <div className='trade-desc exchange'>
                    <span>1.16</span> BTC
                    <span className='arrows'>
                      <img src={arrowRight} alt='Icon' />
                      <img src={arrowLeft} alt='Icon' />
                    </span>
                    <span>6899443544.23</span> NGN
                  </div>

                  <div className='trade-desc'>
                    <p className='price'>
                      Amazon Card <img src={arrowRight} alt='Icon' /> Bank
                    </p>
                    <p className='price'>Transfer NGN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className='landing-blog'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 about-text'>
                <h3 className='heading'>
                  Great experience <span>with CoinBase</span>
                </h3>
                <p className='text'>
                  CoinBase is an online site and a p2admin platform that allows
                  users to buy, sell and/ or exchange digital and flat assets
                  safely. Owned and managed by CoinBase Business Services
                  established and incoperated in Nigeria.
                </p>

                <button className='btn-login'>DISCOVER</button>
              </div>
              <div className='col-md-6 blog-img'>
                <img src={blogImage} alt='Logo' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>

        {/* Trade Box Section */}
        <div className='trade-box'>
          <div className='container'>
            <div className='trade-box-container'>
              <h4 className='heading'>Trade from anywhere</h4>
              <div className='content'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='content-item'>
                      <img src={bitcoinIcon} alt='Icon' />
                      <p>Bitcoin</p>
                    </div>
                  </div>
                  <div className='col-md-6 '>
                    <div className='content-item'>
                      <img src={giftcardIcon} alt='Icon' />
                      <p>Gift Cards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Carousel */}
        <div className='blog-carousel'>
          <div className='container'>
            <div className='blog-carousel-header'>
              <h4 className='head'>Our blog</h4>
              <p className='text'>
                Get to know the latest stuff via our blog post.
              </p>
            </div>

            <Slider {...settings}>
              {/* Item 1 */}
              <div
                className={`item ${this.state.currentSlide === 0 && 'active'}`}
              >
                <p className='date'>01 FEB, 2019 | Technology</p>
                <p className='heading'>
                  How to Sell Your Itunes GiftCard With Us.
                </p>
                <p className='description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem vitae dolorum molestias officiis dolor suscipit eveniet
                  architecto quas obcaecati?
                </p>
                <Link to='/blog/giftcard' className='btn-alt'>
                  READ MORE
                </Link>
              </div>

              {/* Item 2 */}
              <div
                className={`item ${this.state.currentSlide === 1 && 'active'}`}
              >
                <p className='date'>01 FEB, 2019 | Technology</p>
                <p className='heading'>
                  How to Sell Your Itunes GiftCard With Us.
                </p>
                <p className='description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem vitae dolorum molestias officiis dolor suscipit eveniet
                  architecto quas obcaecati?
                </p>
                <Link to='/blog/giftcard' className='btn-alt'>
                  READ MORE
                </Link>
              </div>

              {/* Item 3 */}
              <div
                className={`item ${this.state.currentSlide === 2 && 'active'}`}
              >
                <p className='date'>01 FEB, 2019 | Technology</p>
                <p className='heading'>
                  How to Sell Your Itunes GiftCard With Us.
                </p>
                <p className='description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem vitae dolorum molestias officiis dolor suscipit eveniet
                  architecto quas obcaecati?
                </p>
                <Link to='/blog/giftcard' className='btn-alt'>
                  READ MORE
                </Link>
              </div>
            </Slider>
          </div>
        </div>

        {/* Testimony Section */}
        <div className='testimony'>
          <div className='container'>
            <h4 className='head'>10,000 Satisfied clients around the workd</h4>
            <p className='text'>
              Yeah! we&apos;re proud with numbers. We've helped thousands of
              clients all around the world with our bespoke service. Hover ontop
              of their pic to view their testimonials.
            </p>
            <div className='testimonies'>
              <div className='item-sm'></div>
              <div className='item-md'></div>
              <div className='item-xs'></div>
            </div>
          </div>
        </div>

        {/* App Section */}
        <div className='landing-app'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 mx-auto'>
                <h4 className='head'>Download our app</h4>
                <p className='text'>
                  Discover exclusive deals and discounts with our mobile
                  experience.
                </p>
                <div className='icons'>
                  <img src={appleLogo} alt='Icon' className='icon' />
                  <img src={playStoreLogo} alt='Icon' className='icon' />
                </div>
              </div>
            </div>
          </div>

          <div className='phones-container'>
            <img src={phoneMask} alt='Mask' className='phoneMask' />
            <div className='phones'>
              <img src={applePhone} alt='Phone' />
              <img src={androidPhone} alt='Phone' />
            </div>
          </div>

          <div className='container newsletter'>
            <div className='row text-center'>
              <div className='col-md-6 mx-auto'>
                <h4 className='head'>Subscribe our newsletter</h4>
                <p className='text'>
                  Subscribe to our newsletter for daily/weekly update of our
                  products and services.
                </p>

                <form>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='form-control'
                  />
                  <button type='submit' className='btn-login'>
                    Discover
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
