import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from "./Contact.module.css"
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <h1 className={styles.textColor} >Contact Us</h1>
                <p className={styles.textColor}>If you encounter any issues while accessing the Talkiyo app, using its services, or making a payment, please feel free to contact us. Our team is always here to help you.</p>

                <h2 className={styles.textColor}>Location</h2>
                <p className={styles.textColor}>
                    Talkiyo Tech Private Limited<br />
                    Building No. 24/1701,<br />
                    Suite No.202 Heiley Spaces, 2nd Floor KC Arcade,<br />
                    Near TV Centre, CSEZ P.O, Kakkanad,<br />
                    Ernakulam, Kerala, India, 682037
                </p>

                <h2 className={styles.textColor}>Make a Call</h2>
                <p className={styles.textColor}>+91-871-482-8085</p>

                <h2 className={styles.textColor}>Send a Mail</h2>
                <p>
                    <a href="mailto:talkiyo@gmail.com" className={styles.textColor}>talkiyo@gmail.com</a><br />
                    <a href="mailto:support@talkiyo.com" className={styles.textColor}>support@talkiyo.com</a>
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
