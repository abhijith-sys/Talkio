import React from 'react'
import styles from "./Footer.module.css"
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.about}>
                    <h4>ABOUT</h4>
                    <span className={styles.aboutContent}>Talkiyo aims to connect professionals from various fields, providing a platform where expertise meets opportunity. Our primary goal is to facilitate seamless connections between professionals and individuals seeking their services. Through the Talkiyo app, professionals can easily register and create profiles, making themselves accessible for networking, consultations, and collaborations.

                        Whether you're looking to hire an expert, seek advice, or expand your professional network, Talkiyo offers a streamlined, user-friendly interface for chatting and connecting with industry leaders and specialists. Join Talkiyo today and unlock a world of professional opportunities.
                    </span>
                </div>
                <div className={styles.aboutLink}>
                    <Link to={`/`}>  <h4 className={styles.textColor}> Talkiyo</h4></Link> <br />
                    <Link to={`/about`}>  <h4 className={styles.textColor}>ABOUT US</h4> </Link> <br />
                    <Link to={`/contact`}>  <h4 className={styles.textColor}>CONTACT</h4></Link><br />
                    <Link to={`/privacy`}>  <h4 className={styles.textColor}>PRIVACY POLICY</h4></Link><br />
                    <Link to={`/terms`}>   <h4 className={styles.textColor}>TERMS & CONDITION</h4></Link>
                </div>
                <div className={styles.aboutLink}>
                    <h4>CONTACT US</h4><br />
                    <h5>ADDRESS</h5><br />
                    <span>2D FLOOR KC ARCADE ,NEAR TV CENTER,CSEZ P.O,KAKKANAD,ENAKULAM-682037
                    </span><br />
                    <span>EMIAL</span><br />
                   <a href="mailto:Talkiyoapp@gmail.com"> <span className={styles.textColor}>talkiyoapp@gmail.com</span></a><br />
                    <span>CONTACT</span><br />
                    <span>+91- 7306816967</span><br />
                </div>
            </div>
            {/* <hr></hr> */}
            <div className={styles.bottomFooter}>
                <span>Copyright © 2024 All Rights Reserved by Talkiyo.</span>
                <div className={styles.bottomFooterIcons}>
                    <SocialIcon url="https://x.com/talkiyo?s=21" />
                    <SocialIcon url="https://www.threads.net/@talkiyo_" />
                    <SocialIcon url="https://www.instagram.com/talkiyo_?igsh=MXYzbWQ4M3A3MzEzcA%3D%3D&utm_source=qr" />
                    <SocialIcon url="https://www.facebook.com/share/B7yeZK9pmEDFivQu/?mibextid=LQQJ4d" />
                </div>
            </div>
        </div>
    )
}

export default Footer
