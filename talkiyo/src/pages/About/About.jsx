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
                <p className={styles.textColor}>Welcome to Talkiyo, your premier platform for connecting professionals with clients seeking specialized services. Our mission is to bridge the gap between experts and those in need of their expertise, creating a dynamic marketplace where skills and knowledge are easily accessible.</p>

                <h2 className={styles.textColor}>What We Do</h2>
                <p className={styles.textColor}>At Talkiyo, we empower professionals to showcase their talents and offer their services to a broad audience. Our app provides a straightforward, user-friendly interface for professionals to register, set up their profiles, and list their services along with pricing. This enables professionals to effectively market their skills, while clients can effortlessly find and connect with the right expert for their needs.</p>

                <h2 className={styles.textColor}>Features of Talkiyo</h2>
                <ul>
                    <li><strong>Professional Registration</strong>: Easily sign up and create a comprehensive profile highlighting your skills, experience, and services offered. Add your availability and pricing to give potential clients all the information they need to make an informed decision.</li>
                    <li><strong>Service Listing</strong>: List your services in a clear and detailed manner, specifying what you offer, your rates, and any packages available. This transparency helps clients find the perfect match for their requirements.</li>
                    <li><strong>Seamless Connection</strong>: The Talkiyo app facilitates direct communication between professionals and clients. Users can chat in real-time, schedule consultations, and discuss project details effortlessly within the app.</li>
                    <li><strong>Secure Transactions</strong>: Our platform ensures secure payment processing, giving both professionals and clients peace of mind. Payments are handled seamlessly, allowing professionals to focus on delivering quality services.</li>
                    <li><strong>User-Friendly Interface</strong>: Designed with both professionals and clients in mind, Talkiyo’s intuitive interface makes it easy to navigate, find services, and manage appointments.</li>
                </ul>

                <h2 className={styles.textColor}>Why Choose Talkiyo?</h2>
                <ul>
                    <li><strong>Efficiency</strong>: Save time by finding the right professional quickly and efficiently.</li>
                    <li><strong>Transparency</strong>: Clear pricing and service descriptions help you make informed decisions.</li>
                    <li><strong>Accessibility</strong>: Connect with professionals from various fields, all in one place.</li>
                    <li><strong>Support</strong>: Our customer service team is always ready to assist you with any queries or issues.</li>
                </ul>

                <h2 className={styles.textColor}>Join Us Today</h2>
                <p className={styles.textColor}>Whether you’re a professional looking to expand your client base or a user in need of specialized services, Talkiyo is here to help. Join our growing community today and discover the benefits of a platform designed to make professional connections easier and more effective.</p>

                <p className={styles.textColor}>Download the Talkiyo app now and start connecting!</p>
            </div>
            <Footer/>
        </div>
    )
}

export default About
