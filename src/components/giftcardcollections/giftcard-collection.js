import React, { Component } from 'react'

// import './bitcoin-collection.css'
import Modal from '../modal/modal'

import AmazonCard from '../../assets/images/cards/amazon.svg'
import ItunesCard from '../../assets/images/cards/itunes.svg'
import StreamCard from '../../assets/images/cards/stream.svg'
import GoogleCard from '../../assets/images/cards/google.svg'
import OtherCard from '../../assets/images/cards/others.svg'

import './giftcard-collection.css'

class GiftCardCollection extends Component {
  render() {
    return (
      <Modal
        show={this.props.showGiftCardModal}
        closeModal={this.props.closeModal}
      >
        <div className='collection-lg'>
          <div className='form-header'>Got Gift Cards For Sale?</div>
          <p className='form-text'>
            Choose your preferred card type to continue the exchange process
          </p>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-4 ml-3 ml-md-0'>
                <img
                  src={AmazonCard}
                  alt='Card'
                  className='card-img'
                  onClick={() => {
                    this.props.closeModal()
                    this.props.toggleAmazon()
                  }}
                />
              </div>
              <div className='col-md-4 col-4 ml-4 ml-md-0'>
                <img
                  src={ItunesCard}
                  alt='Card'
                  className='card-img'
                  onClick={() => {
                    this.props.closeModal()
                    this.props.toggleItunes()
                  }}
                />
              </div>
              <div className='col-md-4 col-4 ml-4 ml-md-0'>
                <img
                  src={StreamCard}
                  alt='Card'
                  className='card-img'
                  onClick={() => {
                    this.props.closeModal()
                    this.props.toggleSteam()
                  }}
                />
              </div>
              <div className='col-md-4 col-4 ml-4 ml-md-0'>
                <img
                  src={GoogleCard}
                  alt='Card'
                  className='card-img'
                  onClick={() => {
                    this.props.closeModal()
                    this.props.toggleGoogle()
                  }}
                />
              </div>
              <div className='col-md-4 mr-auto col-4 ml-5 ml-md-0'>
                <img
                  src={OtherCard}
                  alt='Card'
                  className='card-img'
                  onClick={() => {
                    this.props.closeModal()
                    this.props.toggleOthers()
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default GiftCardCollection
