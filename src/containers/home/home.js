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
import BitcoinCollection from '../../components/bitcoincollections/bitcoin-collection'
import GiftCardCollection from '../../components/giftcardcollections/giftcard-collection'
import Sellbitcoin from '../../components/sellbitcoinmodal/sellbitcoinmodal'
import Giftcard from '../../components/giftcardmodal/giftcardmodal'

// Images
import BitCoinImage from '../../assets/images/cards/bitcoin.svg'
import EthereumImage from '../../assets/images/cards/ethereum.svg'
import AmazonImage from '../../assets/images/cards/amazon.svg'
import ItuneImage from '../../assets/images/cards/itunes.svg'
import SteamImage from '../../assets/images/cards/stream.svg'
import GoogleImage from '../../assets/images/cards/google.svg'
import OtherImage from '../../assets/images/cards/others.svg'

class Home extends React.Component {
  state = {
    isLoginModal: false,
    isSignUpModal: false,
    isGiftCardModal: false,
    isBitcoinModal: false,
    isBitcoinOpen: false,
    isEthereumOpen: false,
    isAmazonOpen: false,
    isItunesOpen: false,
    isSteamOpen: false,
    isGoogleOpen: false,
    isOthersOpen: false,
  }

  toggleLoginModal = () => {
    this.setState({ isLoginModal: !this.state.isLoginModal })
  }
  toggleSignUpModal = () => {
    this.setState({ isSignUpModal: !this.state.isSignUpModal })
  }

  toggleGiftCardModal = () => {
    this.setState({ isGiftCardModal: !this.state.isGiftCardModal })
  }

  toggleBitcoinModal = () => {
    this.setState({ isBitcoinModal: !this.state.isBitcoinModal })
  }

  toggleBTC = () => {
    this.setState({
      isBitcoinOpen: !this.state.isBitcoinOpen,
      isBitcoinModal: false,
    })
  }

  toggleEth = () => {
    this.setState({
      isEthereumOpen: !this.state.isEthereumOpen,
      isBitcoinModal: false,
    })
  }

  toggleAmazon = () => {
    this.setState({
      isAmazonOpen: !this.state.isAmazonOpen,
      isGiftCardModal: false,
    })
  }

  toggleItunes = () => {
    this.setState({
      isItunesOpen: !this.state.isItunesOpen,
      isGiftCardModal: false,
    })
  }
  toggleSteam = () => {
    this.setState({
      isSteamOpen: !this.state.isSteamOpen,
      isGiftCardModal: false,
    })
  }
  toggleGoogle = () => {
    this.setState({
      isGoogleOpen: !this.state.isGoogleOpen,
      isGiftCardModal: false,
    })
  }
  toggleOthers = () => {
    this.setState({
      isOthersOpen: !this.state.isOthersOpen,
      isGiftCardModal: false,
    })
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

        <BitcoinCollection
          showBitcoinModal={this.state.isBitcoinModal}
          closeModal={this.toggleBitcoinModal}
          toggleBTC={this.toggleBTC}
          toggleEth={this.toggleEth}
        />

        <GiftCardCollection
          showGiftCardModal={this.state.isGiftCardModal}
          closeModal={this.toggleGiftCardModal}
          toggleAmazon={this.toggleAmazon}
          toggleItunes={this.toggleItunes}
          toggleSteam={this.toggleSteam}
          toggleGoogle={this.toggleGoogle}
          toggleOthers={this.toggleOthers}
        />

        {/* Bitcoin Cards Start */}
        <Sellbitcoin
          showBitcoinModal={this.state.isBitcoinOpen}
          img={BitCoinImage}
          type='BTC'
          bgcolor='radial-gradient(100% 100% at 46.86% 0%, #ff8000 0%, #e34141 100%)'
          closeModal={this.toggleBTC}
        />

        <Sellbitcoin
          showBitcoinModal={this.state.isEthereumOpen}
          img={EthereumImage}
          type='Eth'
          bgcolor='linear-gradient(145.64deg, #00E0FF 9.67%, #0047FF 107.49%)'
          closeModal={this.toggleEth}
        />

        {/* Bitcoin Cards End */}

        {/* GiftCard Cards Start */}
        <Giftcard
          img={AmazonImage}
          type='amazon'
          showGiftCard={this.state.isAmazonOpen}
          closeModal={this.toggleAmazon}
        />
        <Giftcard
          img={ItuneImage}
          type='App Store iTunes'
          showGiftCard={this.state.isItunesOpen}
          closeModal={this.toggleItunes}
        />
        <Giftcard
          img={SteamImage}
          type='steam'
          showGiftCard={this.state.isSteamOpen}
          closeModal={this.toggleSteam}
        />
        <Giftcard
          img={GoogleImage}
          type='Google Play'
          showGiftCard={this.state.isGoogleOpen}
          closeModal={this.toggleGoogle}
        />
        <Giftcard
          img={OtherImage}
          type='Others'
          showGiftCard={this.state.isOthersOpen}
          closeModal={this.toggleOthers}
        />
        {/* Bitcoin Cards End */}

        <Header
          openLoginModal={this.toggleLoginModal}
          openGiftCardModal={this.toggleGiftCardModal}
          openBitCoinModal={this.toggleBitcoinModal}
        />
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
