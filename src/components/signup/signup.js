import React, { Component, useState } from 'react';
import './signup.css';

//helper function for checking validity of form before submitting
const formValid = ({ formErrors, ...rest }) => {
  //initial state of valid form
  let valid = true;

  //checks to see the error object has any value greater than zero which implies that an error exists and renders the for invalid
  Object.values(formErrors).forEach((val) => val.length > 0 && (valid = false));

  //checks to see if any input has  been made to the form.form is invalid if not
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });
  return valid;
};
///-------------------------------------------------------

//regex for checking email validity
const emailRegex = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);
//----------------------------------------

class Signup extends Component {
  constructor(props) {
    super(props);
    //state variables
    this.state = {
      fullName: null,
      email: null,
      password: null,
      //error object
      formErrors: {
        fullName: '',
        email: '',
        password: '',
      },
    };
  }

  //handles form submission
  handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state))
      console.log(
        `
        firstName: ${this.state.fullName}
        email:${this.state.email}
        password:${this.state.password}`
      );
    else console.error('form invalid');
  };
  //   -------------------

  //validation for input types
  handleChange = (e) => {
    e.preventDefault();
    //get the name of the input type and the current state value of it
    const { name, value } = e.target;
    //clone the error object
    let formErrors = this.state.formErrors;

    // validation conditions for various input types
    switch (name) {
      case 'fullName':
        formErrors.fullName =
          value.length < 3 ? 'minimum of three characters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'invalid email address';
        break;
      case 'password':
        formErrors.email =
          value.length < 6 ? 'Minimum of six characters required' : '';
        break;
      default:
        break;
    }
    //----------------------------------------------

    //update state with formErrors if any and values
    this.setState({ formErrors, [name]: value });
  };

  render() {
    //get for errors to be displayed
    const { formErrors } = this.state;

    return (
      <div className="signup__container">
        <h3 className="signup__container-heading">Sign Up</h3>
        <p className="signup__container-paragraph">
          There&apos;s no charge upon registeration
        </p>
        <form
          action="#"
          className="signup__container-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="form-input"
            placeholder="Full Name"
            name="fullName"
            required
            onChange={this.handleChange}
          />
          {formErrors.fullName.length > 0 && (
            <span className="errormessage">{formErrors.fullName}</span>
          )}
          <input
            type="Email"
            className="form-input"
            placeholder="email"
            name="email"
            required
            onChange={this.handleChange}
          />
          {formErrors.email.length > 0 && (
            <span className="errormessage">{formErrors.email}</span>
          )}
          <input
            type="password"
            className="form-input"
            placeholder="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          {formErrors.password.length > 0 && (
            <span className="errormessage">{formErrors.password}</span>
          )}

          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Confirm Password"
            required
          />
          <button className="form-button">SIGNUP</button>
        </form>
        <p className="signup__container-paragraph signup__container-paragraph--mod">
          Already a member <a href="http">Login</a>
        </p>
      </div>
    );
  }
}

export default Signup;
