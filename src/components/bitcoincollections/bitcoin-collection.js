import React, { Component } from 'react'

import './bitcoin-collection.css'
import Modal from '../modal/modal'

import BitcoinCard from '../../assets/images/cards/bitcoin.svg'
import EthereumCard from '../../assets/images/cards/ethereum.svg'

class BitcoinCollection extends Component {
  render() {
    return (
      <Modal
        show={this.props.showBitcoinModal}
        closeModal={this.props.toggleBTC}
      >
        <div className='collection'>
          <div className='form-header'>Sell bitcoin</div>
          <p className='form-text'>Choose your preffered product to continue</p>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <img
                  src={BitcoinCard}
                  alt='Card'
                  className='card-img'
                  onClick={() => {
                    this.props.closeModal()
                    this.props.toggleBTC()
                  }}
                />
              </div>
              <div className='col-md-6'>
                <img
                  src={EthereumCard}
                  alt='Card'
                  onClick={() => {
                    this.props.closeModal()
                    this.props.toggleEth()
                  }}
                  className='card-img'
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default BitcoinCollection
