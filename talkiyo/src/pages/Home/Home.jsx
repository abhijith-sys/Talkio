import React from 'react'
import styles from "./Home.module.css";
import images from "../../assets/home.svg"
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <span className={styles.contentheading}>Talkiyo LLP</span>
                    <br />
                    <br />
                    <span className={styles.contenSection}>
                    Our mission is to reduce social isolation by providing a platform where users can connect with professionals for various services. Users can log in as either a professional offering their time and expertise or as someone seeking services. The platform facilitates these interactions at rates set by the professionals, allowing for valuable and supportive conversations, whether it’s to share achievements or seek support during challenging times.                    </span>
                    
                
                    <br />
                    <br />
                    <span className={styles.contenSection}>
                        Professionals can register on our platform, create profiles, and list their availability to connect with those seeking a listening ear. Whether you are a trained counselor, a seasoned professional, or someone with a compassionate heart, Talkiyo provides the tools you need to offer your time and expertise.
                    </span>
                    <br />
                    <br />
                    <span className={styles.contenSection}>
                        Users can browse through available listeners, schedule sessions, and make secure payments through our platform. Each connection made through Talkiyo is an opportunity to make a difference in someone’s life, providing the support they need, when they need it the most.
                    </span>
                    <br />
                    <br />
                    <span className={styles.contenSection}>
                        Join Talkiyo today and be part of a community dedicated to making the world a more connected and empathetic place, one conversation at a time.
                    </span>
                    <br />
                </div>

                <div className={styles.contentRight}>
                    <img src={images} alt="" className={styles.contetnImage} />
                </div>
            </div>

            <div className={styles.contentprise} >

                <h3 className={styles.contentHeding}>Explore Our Packages and Pricing</h3>
                <div className={styles.contentPriseList}>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>BASIC PLAN</span>
                        <span className={styles.price}>₹99.00</span>

                        <hr>
                        </hr>
                        {/* <span className={styles.time}>15 Mintes Talk Time</span> */}

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>STANDARD PLAN
                        </span>
                        <span className={styles.price}>₹199.00</span>

                        <hr>
                        </hr>
                        {/* <span className={styles.time}>30 Mintes Talk Time</span> */}

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>PREMIUM PLAN</span>
                        <span className={styles.price}>₹499.00</span>

                        <hr>
                        </hr>
                        {/* <span className={styles.time}>1 Hours Talk Time</span> */}

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>PRO PLAN
                        </span>
                        <span className={styles.price}>₹999.00</span>

                        <hr>
                        </hr>
                        {/* <span className={styles.time}>1 Hours 30 Mintes Talk Time</span> */}

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>ADVANCED PLAN</span>
                        <span className={styles.price}>₹1999.00</span>

                        <hr>
                        </hr>
                        {/* <span className={styles.time}>2 Hours Talk Time
                        </span> */}

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>EXCLUSIVE PLAN</span>
                        <span className={styles.price}>₹4999.00</span>

                        <hr>
                        </hr>
                        {/* <span className={styles.time}>2 Hours 30 Mintes Talk Time
                        </span> */}

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Home
