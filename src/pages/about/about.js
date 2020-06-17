import React from 'react'
import './about.css'
import path from '../../assets/images/common/path.svg'
import img from '../../assets/images/common/img.svg'
import img1 from '../../assets/images/common/img1.svg'
import line from '../../assets/images/common/line.svg'
import quality from '../../assets/images/common/quality.svg'
import medal from '../../assets/images/common/medal.svg'
import customerview from '../../assets/images/common/customerview.svg'
import tree from '../../assets/images/common/tree.svg'
import support from '../../assets/images/common/support.svg'



function About() {
    return ( <
        div className = "main" >
        <
        section className = "heroine" >
        <
        div className = "wrap__hero" >


        <
        img src = { path }
        alt = "path design"
        className = "path" / >
        <
        div className = "hero-left" >
        <
        p > HOME / ABOUT US < /p> <
        p >
        Great Service, < br / >
        Professional support <
        /p> <
        p >
        CoinBase is a platform
        for trading your bitcoin and < br / >
        giftcard at the best rate, why not give us a trial. <
        /p> <
        /div> <
        div className = "hero-right" > < img src = { img }
        alt = "hero" / > < /div> <
        /div> {
            /* <!-- end of hero section -->

                  <!-- CEO QUOTE SECTION --> */
        } <
        /section> <
        section className = "ceo-quote" >
        <
        p style = {
            { color: "rgb(99%, 45%, 61%)" } } >
        <
        q > Morbi sagittis ultricies ex, a tempus lorem suscipit < br / >
        non.Donec semper leo ut lobortis condimentum.Orci < br / >
        varius natoque penatibus et magnis < /q> <
        /p> <
        img src = { line }
        alt = "line" / >
        <
        p > Ramon Ridwan• CEO CoinBase < /p> <
        /section> { /* <!-- ABOUT COINBASE SECTION --> */ } <
        div className = "clearfix" / > < br / >
        <
        div className = "about_coinbase_container" >
        <
        div className = "row" >
        <
        div className = "card_1" >
        <
        div className = "about_coinbase_content" >
        <
        div className = "about_coinbase_image" > < img src = { img1 }
        alt = "about-coin-base" / > < /div> <
        div className = "about_coinbase_heading" > About Coinbase < br / > < img className = "img_heading"
        src = { line }
        alt = "line" / > < /div>

        <
        div className = "about_coinbase_msg" > CoinBase is an online site and a p2admin platform that allows users to buy, sell and / or exchange digital and fiat assets safely.Owned and managed by CoinBase Business Services established and Incoperated in Nigeria. <
        /div> <
        div className = "about_coinbase_icons" >
        <
        div className = "icon" > < img src = { quality }
        alt = "icon" / > < /div> <
        div className = "icon" > < img src = { medal }
        alt = "icon" / > < /div> <
        div className = "icon" > < img src = { customerview }
        alt = "icon" / > < /div> <
        div className = "icon" > < img src = { support }
        alt = "icon" / > < /div>

        <
        /div> { /* <!--end of about coinbase icons--> */ } <
        /div> { /* <!--End of about coin base content--> */ } <
        /div> { /* <!--End of card--> */ } <
        /div> { /* <!--End of row--> */ } <
        /div> {
            /* <!--End of About coinbase container-->


                <!-- OUR HISTORY SECTION --> */
        }

        <
        section className = "our-history" >
        <
        h3 > Our history < /h3> <
        img className = "ine_img"
        src = { line }
        alt = "line" / >
        <
        div >
        <
        p style = {
            { color: "rgb(99%, 45%, 61%)" } } > May 2010 < /p> <
        p > Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.Nulla facilisi.Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse < /p> <
        /div> <
        div >
        <
        p style = {
            { color: "rgb(99%, 45%, 61%)" } } > May 2017 < /p> <
        p > Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.Nulla facilisi.Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse < /p> <
        /div> <
        div >
        <
        p style = {
            { color: "rgb(99%, 45%, 61%)" } } > May 2019 < /p> <
        p > Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.Nulla facilisi.Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse < /p> <
        /div> <
        img className = "tree"
        src = { tree }
        alt = "tree" / > {
            /* <p
                    style={{fontStyle: "normal", fontWeight: "bold", fontSize: "12px", lineHeight: "20px", textAlign: "center", letterSpacing: "0.608696px", textTransform: "uppercase", color:" var(--darkColor)"}}>
                    TO BE CONTINUED...</p> */
        } <
        /section>

        { /* <!-- END OF OUR HISTORY SECTION --> */ } <
        section className = "section" >
        <
        h3 className = "section__heading" > Meet the team < /h3> <
        p className = "newsletter-paragraph section__paragraph" >
        Meet the team that make the process of this system fast and < br / >
        painless as possible to providing you with good result. <
        /p>

        <
        div className = "newsletter__rectangles" >
        <
        div className = "newsletter__rectangles-element first" / >
        <
        div className = "newsletter__rectangles-element second" / >
        <
        div className = "newsletter__rectangles-element third" >
        <
        div >
        <
        h3 > CEO < /h3> <
        p > Amanda Ruth < /p> <
        /div> <
        /div> <
        div className = "newsletter__rectangles-element fourth" / >
        <
        div className = "newsletter__rectangles-element fifth" / >

        <
        /div> <
        /section> {
            /* <!-- end of team section markup -->
                <!-- subscription markup --> */
        } <
        section className = "section2" >
        <
        h3 className = "section__heading" > Subscribe Our Newletter < /h3> <
        p className = "section__paragraph" > < br / > < br / >
        Subscribe to our newsletter
        for daily / weekly < br / >
        updates of our products and services <
        /p> <
        form action = "#"
        method = "GET"
        className = "section__form" >
        <
        input type = "text"
        className = "section-input"
        placeholder = "EMAIL" / >
        <
        br / >
        <
        button className = "section-button header__end-cta" > DISCOVER < /button> <
        /form> <
        /section> { /* <!-- end of subscription markup --> */ }


        <
        /div>
    );
}

export default About