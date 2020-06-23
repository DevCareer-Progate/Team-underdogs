import React, { Fragment } from 'react'
import './blog.css'
import { Link } from 'react-router-dom'

import Laptop from '../../assets/images/Blog/laptop guy.svg'
import Gift from '../../assets/images/Blog/gift guys.svg'
import Ethereum from '../../assets/images/Blog/ethereum.svg'
import Merry from '../../assets/images/Blog/merry.svg'

function Blog() {
  return (
    <Fragment>
      <section className='background-img'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-4 col-lg-4 mx-auto mt-5 col-txt'>
              <div className='left-text'>
                <h1 className="left-text-head">
                  Stay updated,
                  <br />
                  Never miss a post.
                </h1>
                <p className="left-text-para">
                  Get to know the latest stuff about our services
                  <br />
                  via our blog post.
                </p>
              </div>
            </div>

            <div className='col-sm-12 col-md-8 col-lg-8 mt-4'>
              <div className='laptop'>
                <img className='img-fluid' src={Laptop} alt='laptop guy' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='gift-section'>
        <div className='container'>
          <div className='row cards'>
            <div className='card ml-3 mr-3 mt-5'>
              <img src={Gift} className='img-fluid card-img-tp' alt='' />
              <div className='card-body'>
                <h5 className='card-title'>
                  HOW TO SELL YOUR ITUNES GIFTCARD WITH US.
                </h5>
                <p className='card-text text-center'>
                  19 JUNE, 2019 | BUSINESS
                </p>
                <p className='card-text text-center'>
                  Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
                  voluptaria in. Ad mei modus quodsi
                </p>
                <p className='card-text text-center'>
                  complectitur, postea verterem persecuti cu est, sea epicuri.
                </p>
                <Link to='/blog/ethereum' className='btn mt-3 mb-3'>
                  DISCOVER
                </Link>
              </div>
            </div>
            </div>
          </div>

      </section>

      <section className='merry-section'>
        <div className='container'>
          <div className='row'>
            <div className='card ml-3 mr-3 mt-5'>
              <img src={Merry} className='img-fluid card-img-tp' alt='' />
              <div className='card-body'>
                <h5 className='card-title'>
                  HOW TO SELL YOUR ITUNES GIFTCARD WITH US.
                </h5>
                <p className='card-text text-center'>
                  19 JUNE, 2019 | BUSINESS
                </p>
                <p className='card-text text-center'>
                  Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
                  voluptaria in. Ad mei modus quodsi
                </p>
                <p className='card-text text-center'>
                  complectitur, postea verterem persecuti cu est, sea epicuri.
                </p>
                <Link to='/blog/ethereum' className='btn mt-3 mb-3'>
                  DISCOVER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='Ethereum-section'>
        <div className='container'>
          <div className='row'>
            <div className='card ml-3 mr-3 mt-5'>
              <img src={Ethereum} className='img-fluid card-img-tp' alt='' />
              <div className='card-body'>
                <h5 className='card-title'>
                  HOW TO SELL YOUR ITUNES GIFTCARD WITH US.
                </h5>
                <p className='card-text text-center'>
                  19 JUNE, 2019 | BUSINESS
                </p>
                <p className='card-text text-center'>
                  Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
                  voluptaria in. Ad mei modus quodsi
                </p>
                <p className='card-text text-center'>
                  complectitur, postea verterem persecuti cu est, sea epicuri.
                </p>
                <Link to='/blog/ethereum' className='btn mt-3 mb-3'>
                  DISCOVER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pagination-section'>
        <div className='circles' id='onez'>
          01
        </div>
        <div className='circles'>02</div>
        <div className='circles'>03</div>
        <div className='circles'>...</div>
        <div className='circles' id='button'>
          Next
        </div>
      </section>
    </Fragment>
  )
}

export default Blog
