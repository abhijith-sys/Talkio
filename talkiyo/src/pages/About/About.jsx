import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from "./About.module.css"
import Footer from '../../components/Footer/Footer'
const About = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <h1 className={styles.textColor}>About Us</h1>
                <p className={styles.textColor}>
                    The Talkiyo LLP app is India’s foremost platform for emotional wellness and online counselling, offering an unmatched consultation experience designed to make your life easier. By providing seamless access to top-quality support, the app ensures that help is always available when you need it most, offering compassionate and professional guidance in a convenient and accessible way.                    </p>

                <h2 className={styles.textColor}>What We Do</h2>
                <p className={styles.textColor}>
                    The Talkiyo LLP app stands as India’s leading platform for emotional wellness and online counselling, providing a comprehensive solution for those seeking mental and emotional support. Designed to make life easier, Talkiyo LLP ensures that users can access top-tier consultation services from the comfort of their own homes. Whether you are dealing with stress, anxiety, relationship challenges, or simply need someone to talk to, the app connects you with compassionate and well-trained professionals. Our platform fosters a safe, confidential environment where users can openly share their struggles and receive personalized guidance.

                    Since the world has shifted towards virtual interactions after the COVID-19 pandemic, Talkiyo LLP has adapted to meet the growing demand for online emotional support. With just a few clicks, users can schedule appointments, speak to experts, and find relief through meaningful conversations. There’s no need to wait in long queues or take tokens—help is always within reach. Our app focuses on providing holistic wellness by offering a supportive ear and friendly advice, ensuring that every conversation brings comfort and clarity. Talkiyo LLP redefines how emotional well-being is approached, making support more accessible, immediate, and impactful for everyone.                    </p>

                <h2 className={styles.textColor}>Features of Talkiyo</h2>
                <ul>
                    <li><strong>Emotional Wellness Support : </strong>
                        Provides access to experienced counsellors for emotional support and mental wellness.                     </li>
                    <li><strong>Online Counselling</strong> : 
                        List your services in a clear and detailed manner, specifying what you offer, your rates, and any packages available. This transparency helps clients find the perfect match for their requirements.</li>
                    <li><strong>Seamless Connection</strong>
                        : Enables seamless virtual consultations, allowing users to connect with professionals from the comfort of their homes.                    </li>
                    <li><strong>Professional Listening Services </strong>
                         : Offers compassionate, non-judgmental listeners who are ready to provide friendly advice and a shoulder to lean on                    </li>

                    <li><strong>User-Friendly App Interface</strong> : 
                        Easy-to-navigate platform, allowing users to quickly browse, schedule, and connect with counsellors.

                    </li>
                    <li><strong>Flexible Scheduling</strong> : 
                        Allows users to book appointments with available professionals at their convenience.

                    </li>
                    <li><strong>Instant Connection</strong> : 
                        Eliminates the need for tokens or long waits, ensuring immediate access to support.

                    </li>
                    <li><strong>Wide Range of Professionals</strong>: 
                        Includes a variety of counsellors and compassionate listeners from different backgrounds, providing tailored advice for personal issues.

                    </li>
                    <li><strong>Payment Integration</strong>: 
                        Secure and easy payment options for consultations, ensuring a smooth transaction process.

                    </li>
                    <li><strong>Emphasis on Mental Health</strong>: 
                        Focuses on reducing feelings of isolation, stress, anxiety, and loneliness by offering a supportive space for users to share their struggles   .

                    </li>
                </ul>

                <h2 className={styles.textColor}>Why Choose Talkiyo?</h2>
                <ul>
                    <li><strong>Expert Support</strong>: Connect with experienced counsellors for tailored emotional assistance.</li>
                    <li><strong>Convenience</strong>:Access consultations easily from home with a user-friendly app..</li>
                    <li><strong>Confidentiality</strong>:  Enjoy a safe and private space for open conversations..</li>
                    <li><strong>nstant Access</strong>: Get quick support without long wait times..</li>
                </ul>

                <h2 className={styles.textColor}>Join Us Today</h2>
                <p className={styles.textColor}>Whether you’re a professional looking to expand your client base or a user in need of specialized services, Talkiyo is here to help. Join our growing community today and discover the benefits of a platform designed to make professional connections easier and more effective.</p>

                <p className={styles.textColor}>Download the Talkiyo app now and start connecting!</p>
            </div>
            <Footer />
        </div>
    )
}

export default About
