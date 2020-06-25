import React from 'react'
import '../giftcardmodal/giftcard.css'
import Modal from '../modal/modal'

// The component below represents the BItcoin Modal...

// in other to call it in whatever parent container  you need to pass the props; "img " and "bgcolor" and "type"

// The type prop can only have two value

//1.BTC
//2.Eth

// for Example :  <Giftcard
//     img={this.state.img}
//     bgColor="radial-gradient(100% 100% at 46.86% 0%, #ff8000 0%, #e34141 100%)"
//     type= "Amazon"
//      />

// important:
// import the image in the parent container and save it as one of its states before passing it down as a prop to the sellbitcoin component

const Sellbitcoin = ({ img, bgcolor, type, showBitcoinModal, closeModal }) => {
  let circleBackgroundCOlor = { background: bgcolor, top: '-33%' }
  return (
    <Modal show={showBitcoinModal} closeModal={closeModal}>
      <div className='modal__container'>
        <div className='circle' style={circleBackgroundCOlor}></div>
        <div className='modal__container__top'>
          <img src={img} alt='giftcardimage' className='giftcard-variety' />
          <p className='modal__container__top-txt'>
            <span>N360.00 </span> is our conversion rate for every 0.1{type} on
            this platform
          </p>
        </div>
        <div className='modal__container__bottom'>
          <p>
            The total value you derived here will be the amount you will be
            recieving during the total transaction process
          </p>
          <form action='#' className='modal__container__bottom-form'>
            <input
              type='number'
              required
              placeholder='Amount'
              className='form-input'
              min='0'
            />
            <div className='form-ouput'>
              <p>#0.00</p>
            </div>
            <button className='form-button'>Proceed</button>
          </form>
        </div>
      </div>
    </Modal>
  )
}
export default Sellbitcoin
