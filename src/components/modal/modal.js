import React from 'react'

import './modal.css'

function Modal({ children, show, closeModal }) {
  return show ? (
    <>
      <div className='backdrop' onClick={closeModal}></div>
      <div className='coin-modal'>{children}</div>
    </>
  ) : null
}

export default Modal
