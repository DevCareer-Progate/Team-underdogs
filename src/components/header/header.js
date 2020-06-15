import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

import logoColor from '../../assets/images/common/logo-color.png'

class Header extends Component {
  state = {
    openMenu: false,
  }

  toggleSideBar = () => {
    this.setState({ openMenu: !this.state.openMenu })
  }

  render() {
    return (
      <header className='header'>
        <div className='content'>
          <img src={logoColor} alt='Logo' className='logo' />
          <ul className={`nav-list ${this.state.openMenu && 'open'}`}>
            <li className='nav-list-item'>
              <NavLink
                className='nav-list-link'
                onClick={() => this.toggleSideBar()}
                to='/'
                exact
                activeClassName='active'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-list-item'>
              <NavLink
                className='nav-list-link'
                onClick={() => this.toggleSideBar()}
                to='/about'
                exact
                activeClassName='active'
              >
                About Us
              </NavLink>
            </li>
            <li className='nav-list-item'>
              <NavLink
                className='nav-list-link'
                onClick={() => this.toggleSideBar()}
                to='/blog'
                activeClassName='active'
                exact
              >
                Blog
              </NavLink>
            </li>
            <li className='nav-list-item'>
              <NavLink
                className='nav-list-link'
                onClick={() => this.toggleSideBar()}
                to='/contact'
                activeClassName='active'
                exact
              >
                Contact Us
              </NavLink>
            </li>
            <li className='nav-list-item nav-btn'>
              <button
                className='btn-login'
                onClick={() => {
                  this.toggleSideBar()
                  this.props.openLoginModal()
                }}
              >
                LOGIN
              </button>
            </li>
            <li className='dropdown nav-list-item'>
              <a href='#dropdown' className='dropdown-link'>
                Sell Bitcoin/ Giftcard
              </a>
              <ul className='dropdown-list' id='dropdown-menu'>
                <li>
                  <Link to='sell' className='bitcoin link'>
                    Sell Bitcoin
                  </Link>
                </li>
                <li>
                  <Link to='sell' className='giftcard link'>
                    Sell Giftcard
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className='button'>
            <button className='btn-login' onClick={this.props.openLoginModal}>
              LOGIN
            </button>
          </div>

          <div
            className={`hamburger ${this.state.openMenu && 'open'}`}
            onClick={() => this.toggleSideBar()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
