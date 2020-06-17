import React, { Component } from 'react'

import './login.css'
import Modal from '../modal/modal'

class Login extends Component {
  state = {
    email: '',
    password: '',
    message: '',
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    if (!email && !password) {
      this.setState({ message: 'All field are required' })
      return
    }
    console.log('submitting')
  }

  clearError = () => {
    this.setState({ message: '' })
  }

  render() {
    return (
      <Modal show={this.props.showLogin} closeModal={this.props.closeModal}>
        <div className='login'>
          <div className='form-header'>Welcome back!</div>
          <p className='form-text'>
            Kindly fill in your login details to proceed
          </p>
          <form onSubmit={this.handleSubmit}>
            {this.state.message && (
              <div
                className='alert alert-danger alert-dismissible fade show'
                role='alert'
              >
                {this.state.message}
                <button
                  type='button'
                  className='close'
                  onClick={this.clearError}
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
            )}
            <div className='form-group'>
              <input
                type='email'
                name='email'
                id='email'
                value={this.state.email}
                placeholder='Email'
                onChange={this.handleInputChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                name='password'
                id='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.handleInputChange}
              />
              <button className='btn-link forgot'>
                <small>I forgot my password?</small>
              </button>
            </div>
            <div className='form-group'>
              <button className='btn-login' type='submit'>
                Login
              </button>
            </div>
            <p className='form-text'>
              Don't have an account yet?{' '}
              <button
                className='btn-link'
                type='button'
                onClick={() => {
                  this.props.closeModal()
                  this.props.openSignUpModal()
                }}
              >
                <strong>Sign up</strong>
              </button>
            </p>
          </form>
        </div>
      </Modal>
    )
  }
}

export default Login
