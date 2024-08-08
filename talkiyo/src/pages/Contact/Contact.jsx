import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from "./Contact.module.css"
import Footer from '../../components/Footer/Footer'
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <h1 className={styles.textColor} >Contact Us</h1>
                <p className={styles.textColor}>If you encounter any issues while accessing the Talkiyo app, using its services, or making a payment, please feel free to contact us. Our team is always here to help you.</p>

                <h2 className={styles.textColor}>Location</h2>
                <p className={styles.textColor}>
                2D FLOOR KC ARCADE ,NEAR TV CENTER,CSEZ P.O,KAKKANAD,ENAKULAM-682037
                </p>

                <h2 className={styles.textColor}>Make a Call</h2>
                <p className={styles.textColor}>  <SocialIcon network="whatsapp"  url="https://wa.me/+918848540021 "/>  +91- 8848540021 </p>

                <h2 className={styles.textColor}>Send a Mail</h2>
                <p>
               
                    {/* <a href="mailto:talkiyo@gmail.com" className={styles.textColor}>talkiyo@gmail.com</a><br /> */}
                    <a href="mailto:helptalkiyo@gmail.com" className={styles.textColor}>helptalkiyo@gmail.com</a>
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
