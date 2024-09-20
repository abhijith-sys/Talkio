import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from "./Privacy.module.css"
import Footer from '../../components/Footer/Footer'

const Privacy = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <h1>Privacy Policy</h1>
                <p>
                    Talkiyo ensures a steady commitment to User privacy with regard to the protection of Your personal information that you may share across this Platform/ Application. For the purpose of registration and to provide Services, We may collect and, in some circumstances, disclose information about you with your permission. To ensure better protection of Your privacy, We provide this notice explaining Our information collection and disclosure policies.
                </p>
                <h2>Data Collected</h2>
                <p>
                    We are committed to respecting Your online privacy. We further recognize Your need for appropriate protection and management of any Personal Information You share with us. We may collect the following information:
                </p>
                <ul>
                    <li>Personal data including but not limited to Name, Phone Number, Email ID, Address, City, Gender, Age, Payment Details as per Payment Gateway Rules.</li>
                    <li>Information collected through permission derived by the Platform for Location access, and storage permissions, etc.</li>
                    <li>Tracking Information such as IP address, Device ID, URL visited, browser information, and other interactions with the Platform.</li>
                </ul>
                <h2>Use of Collected Data</h2>
                <p>
                    We use the data we collect to operate, improve, and personalize the services. This data is necessary for purposes such as:
                </p>
                <ul>
                    <li>Providing the Service: Using the data to provide you with requested services, including facilitating payments, processing transactions, and ensuring the functionality of the platform.</li>
                    <li>Communicating with you: Keeping you informed about updates to the platform and other relevant communications.</li>
                    <li>Security: Ensuring the security of your data and protecting against fraud.</li>
                    <li>Analytics: Analyzing usage patterns to improve user experience and service offerings.</li>
                </ul>
                <h2>Data Sharing and Disclosure</h2>
                <p>
                    We do not sell or rent personal information to third parties. We may share information under the following circumstances:
                </p>
                <ul>
                    <li>With your consent.</li>
                    <li>With service providers who perform services on our behalf.</li>
                    <li>For legal reasons, such as compliance with court orders, legal processes, or governmental requests.</li>
                </ul>
                <h2>Your Consent</h2>
                <p>
                    By using our app, registering an account, or making a purchase, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
                <h2>Changes To Our Privacy Policy</h2>
                <p>
                    We may change our Service and policies, and we may need to make changes to this Privacy Policy so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to this Privacy Policy and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Privacy Policy. If you do not want to agree to this or any updated Privacy Policy, you can delete your account.
                </p>
                <h2>Kids' Privacy</h2>
                <p>
                    We do not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from anyone under the age of 18 without verification of parental consent, we take steps to remove that information from our servers.
                </p>
                <h2>Other Policy Issues</h2>
                <p>
                    Parties are urged not to share sensitive personal information or core medical issues as Talkiyo is not a medical facilitator or in any way certified to practice medicine or advice professionally. While under our privacy policy if such information is shared by any party, this would be to their own volition, and such data shall be protected as far as reasonably possible by us. However, we cannot take responsibility for any information that the user may have chosen to share on the Talkiyo mobile application on their own volition or otherwise.
                </p>
                <h2>Payments Data</h2>
                <p>
                    When you use our services for purchases or other financial transactions, we process additional information about you, including payment account and transaction information. Payment account and transaction information include information needed to complete the transaction (this includes information about the payment method, amounts involved). We DO NOT RETAIN any user’s sensitive payment data (e.g., debit card number, expiry date, PIN, OTP, or BHIM UPI PIN).
                </p>
                <h2>The Extent of Application Services</h2>
                <p>
                    Our services do not provide access to emergency services or emergency services providers. You should ensure you can contact your relevant emergency services providers in your relevant city or local administration. Our services are limited to providing general non-certified advisory, discussions, and guidance only.
                </p>
                <h2>Contact Us</h2>
                <p>Don't hesitate to contact us if you have any questions.</p>
                <p>By email: <a href="mailto:helptalkiyo@gmail.com">helptalkiyo@gmail.com</a></p>
            </div>

            <Footer />
        </div>
    )
}

export default Privacy
