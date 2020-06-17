import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './../../pages/landing/landing'
import About from './../../pages/about/about'
import Header from './../../components/header/header'
import Footer from '../../components/footer/footer'
import Blog from './../../pages/blog/blog'
import Contact from './../../pages/contact/contact'
import NotFound from '../../components/not-found/not-found'
import Ethereum from '../../pages/blog/ether/ethereum'
import Login from '../../components/login/login'
import Signup from '../../components/signup/signup'

class Home extends React.Component {
  state = {
    isLoginModal: false,
    isSignUpModal: false,
  }

  toggleLoginModal = () => {
    this.setState({ isLoginModal: !this.state.isLoginModal })
  }
  toggleSignUpModal = () => {
    this.setState({ isSignUpModal: !this.state.isSignUpModal })
  }

  render() {
    return (
      <>
        <Login
          openSignUpModal={this.toggleSignUpModal}
          showLogin={this.state.isLoginModal}
          closeModal={this.toggleLoginModal}
        />
        <Signup
          showLogin={this.toggleLoginModal}
          showSignUp={this.state.isSignUpModal}
          closeModal={this.toggleSignUpModal}
        />
        <Header openLoginModal={this.toggleLoginModal} />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/blog/ethereum' component={Ethereum} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
          <Route
            path='/'
            exact
            render={() => <Landing openSignUpModal={this.toggleSignUpModal} />}
          />
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </>
    )
  }
}

export default Home
