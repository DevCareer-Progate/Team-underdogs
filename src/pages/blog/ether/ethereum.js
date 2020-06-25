import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../ether/ethereum.css'
import btcz from '../../../assets/images/Blog/btc-falling.svg'
import Facebook from '../../../assets/images/Blog/facebook.svg'
import Twitter from '../../../assets/images/Blog/twitter.svg'
import Youtube from '../../../assets/images/Blog/youtube.svg'



const Ethereum = () => {
    return (
        <Fragment>
            <section className="background-imge">
                <div className="container">
                    <div className="row top">
                            <h5 style={{marginTop:'200px'}}>ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER</h5>
                            <h5>Transactions</h5>
                            <p>19 JUNE, 2019 | BUSINESS</p>
                        </div>
                    </div>
                
            </section> 

            <section className="write-up">
                <div className="container">
                    <div className="row content-wrapper">

                        <p className="text-center">But i must explain to you how all this mistaken idea of denouncing pleasure and praising pair
                            was born and i will give you the complete account of the system, and expound the actual teachings
                            of the great explorer of the truth, the master-builder of human happiness. But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                            born and i will give you a complete account of the system, and expound the actual teachings of the 
                            great explorer of the truth, the master-builder of human happiness.
                        </p>
                        <p className="text-center">Planning your next trip</p>
                        <p className="text-center">But i must explain to you how all this mistaken idea of denouncing pleasure and praising pair
                            was born and i will give you the complete account of the system, and expound the actual teachings
                            of the great explorer of the truth, the master-builder of human happiness. But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                            born and i will give you a complete account of the system, and expound the actual teachings of the 
                            great explorer of the truth, the master-builder of human happiness.
                        </p>
                        <p className="text-center">The next part of planning is to determine your starting and ending parts. This could be a place close
                            to home and sail in one area or start and finish at two different parts. Generally, starting and stopping
                            in the same part will save you money and is usally more convenient. You can als fly to a dstination far from home, and then sail another exotic sea. There are luxury yacht
                            charter companies that cruise the Caribbean and Meditererranean seas or around Alaska, the Panama Cabnal, or any place you can imagine.
                        </p>
                        <p className="text-center">Determining the type of cruise is another aspect of planning a chartered yatching trip. You can have as little or many crew members as the ship will hold. A 
                            captain takes all the worries out of navigating and onboard houskeeping services make it a real vacation that rivals the finest hotel services. 
                            You can also choose to have a chef and service crew as part of your vacation package.
                        </p>
                    </div>
                </div>
            </section> 
            
            <section className="bitcoin-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 left-items">
                            <div className="leftItems">
                            <p style={{textAlign:'justify'}} id="left-itemsP">
                                if you like the idea of knowing what is is really like to sail, but don't want to risk safety, you can charter a sailing cruise that puts
                                you in the role of deck hand. A competent crew will detect you as to your "chores" for keeping the ship in the top shape and on course.
                            </p>
                            <p style={{textAlign:'justify'}} id="left-itemsP">
                                Destinations & Ports of important Charte Companies One of the greatest benefits of choosing a chartered cruise as a vacation is the choice.
                                You will most likely have a rough itinerary and that can be affected by the weather. However, you are flexible in deciding how long you want to stay in a particular Port
                                and if you want to add or subtract stops along the way.
                            </p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img className="img-fluid" style={{ width:'60%'}} src={btcz} alt="" />
                        </div>
                    </div>
                </div>
            </section>  

            <section className="btc-content-beneat">
                <div className="container">
                    <div className="row">
                        <div className="col paragraphs">
                            <p className="text-center">
                                Your yacht is your hotel that travels with you. There is only one flight and one hotel to book! Thrn you take
                                all your luggage and unpack it just once to enjoy several days of new destinations.
                            </p>
                            <p className="text-center" style={{textAlign:"center"}}>
                                If you have never experienced crusing before, a chartered experience is a great way to get your feet wet. It is different from cruise lines with thousands
                                of guests because the people on your ship will be your friends and family. The personal touchs of a chartered trip will help
                                you to develop your love for the sea with with all the best benefits of commercial cruises.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="socials">
                <div className="container" style={{width:'60%'}}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 socials-left">
                                 <p style={{fontWeight:'bold', color:'#333333', fontSize:'16px', marginTop:'10px'}}>Tags: Business, Capital, Finance</p>
                                 <h2 style={{fontWeight:'bold', color:'#2F2F2F', fontSize:'18px'}}>How to sell your iTunes<br /> giftcard to us</h2>
                                 <Link to="/" style={{fontSize:'12px', color:'#989898'}}>Prev Post</Link>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 socials-right">
                                <ul className="socialz">
                                    <li style={{marginBottom:'5px'}}> Share with</li>
                                    <li><Link to="/"><img src={Facebook}  alt="facebook" style={{width:'24px', height:'24px'}} /></Link></li>
                                    <li><Link to="/"><img src={Twitter}  alt="facebook" style={{width:'24px', height:'24px'}} /></Link></li>
                                    <li><Link to="/"><img src={Youtube}  alt="facebook" style={{width:'24px', height:'24px'}} /></Link></li>
                                </ul>
                                    <h2 className="exchange-text" style={{fontWeight:'bold', fontSize:'18px'}}>Exchange 5 product<br /> and get 1 free product</h2>
                                    <Link to="/"  style={{fontSize:'12px', color:'#989898'}}>Next Post</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="final-content">
                <div className="container"  style={{width:'60%'}}>
                    <div className="row">
                        <div className="col comments">
                            <h3>Leave A Comment</h3>
                            <p style={{marginLeft:'0px', fontSize:'14px'}}>Your email address will not be published. Required fields are marked*</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="form">
                <form className="myForm">
                    <div className="form-row" style={{marginTop:'10px'}}>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Name*"  />
                        </div>
                        <div className="col">
                        <input type="email" className="form-control" placeholder="Email*" />
                        </div>
                    </div>
                    <div className="form-group" style={{marginTop:'20px'}}>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Comment"></textarea>
                    </div>
                    <div className="publish">
                    <button type="submit" class="btn">Publish</button>
                    </div>
                </form>
            </section>
        </Fragment>
    )
}

export default Ethereum
