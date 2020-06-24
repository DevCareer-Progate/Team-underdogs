import React from 'react';
import './giftcard.css';

// The component below represents the Giftcard Modal...

// in other to call it in whatever parent container  you need to pass the props "img " and "bgcolor"

// for Example :  <Giftcard
//     img={this.state.img}
//     bgColor="radial-gradient(100% 100% at 46.86% 0%, #ff8000 0%, #e34141 100%)"
// />

// important:
// import the image in the parent container and save it as one of its states before passing it down as a prop to the Giftcard component

const Giftcard = ({ img, bgColor }) => {
  let circleBackgroundCOlor = { background: bgColor };
  return (
    <div className="modal__container">
      <div className="circle" style={circleBackgroundCOlor}></div>
      <div className="modal__container__top">
        <img src={img} alt="giftcardimage" className="giftcard-variety" />
        <p className="modal__container__top-txt">
          <span className="span">N360.00 </span> is our conversion rate for
          every amazon card on this platform
        </p>
      </div>
      <div className="modal__container__bottom">
        <p>
          The total value you derived here will be the amount you will be
          recieving during the total transaction process
        </p>
        <form action="#" className="modal__container__bottom-form">
          <select name="card-type" id="card-type" className="form-dropdown">
            <option value="">Card Type</option>
            <option value="Amazon/option">Amazon/option</option>
            <option value="App Store &amp; iTunes">
              App Store &amp; iTunes
            </option>
            <option value="Google Play">Google Play</option>
            <option value="Steam">Steam</option>
          </select>
          <select name="card-type" id="card-type" className="form-dropdown">
            <option value="">Card Currency</option>
            <option value="Naira">Naira</option>
          </select>
          <input
            type="number"
            required
            placeholder="Amount"
            className="form-input"
            min="0"
          />
          <div className="form-ouput">
            <p>#0.00</p>
          </div>
          <button className="form-button">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default Giftcard;
