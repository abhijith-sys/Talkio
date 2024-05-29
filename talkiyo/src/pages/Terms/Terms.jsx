import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from "./Terms.module.css"
import Footer from '../../components/Footer/Footer'

const Terms = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <h2>Terms & Conditions</h2>
                <p>By accessing and using the Talkio app, you agree to be bound by these terms and conditions. Please read them carefully before using the app.</p>
                <h3>1. Acceptance of Terms</h3>
                <p>By downloading, installing, or using the Talkio app, you agree to these terms and conditions and any future amendments and additions. If you do not agree to these terms, you may not use the app.</p>
                <h3>2. Registration</h3>
                <p>Users may be required to register an account with Talkio in order to access certain features of the app. By registering, you agree to provide accurate and complete information and to keep your account credentials secure.</p>
                <h3>3. User Conduct</h3>
                <p>Users agree to use the Talkio app in compliance with all applicable laws and regulations. You may not use the app to transmit any unlawful, harmful, defamatory, or otherwise objectionable content.</p>
                <h3>4. Fees and Payments</h3>
                <p>Talkio may offer paid services within the app. By purchasing these services, you agree to pay the specified fees and abide by any additional terms and conditions associated with the purchase.</p>
                <h3>5. Limitation of Liability</h3>
                <p>Talkio shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the app.</p>
                <h3>6. Modification of Terms</h3>
                <p>Talkio reserves the right to modify or update these terms and conditions at any time without prior notice. Users are encouraged to review the terms periodically for changes.</p>
                <p>By continuing to use the Talkio app after any modifications to these terms, you agree to be bound by the revised terms and conditions.</p>
                <h3>7. Contact Us</h3>
                <p>If you have any questions or concerns about these terms and conditions, please contact us at helptalkiyo@gmail.com.</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Terms
