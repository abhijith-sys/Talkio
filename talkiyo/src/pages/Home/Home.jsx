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
                        Our mission is to create meaningful connections and reduce social isolation by providing a platform where anyone can monetize their time and listening skills. We believe in the transformative power of conversation and the significant impact of having someone to talk to, whether it’s to share happiness or seek solace during challenging times.
                    </span>
                    <br />
                    <br />
                    <span className={styles.contenSection}>
                        Talkiyo LLP was born from the realization that in today's fast-paced, digitally-driven world, many individuals experience loneliness and isolation. At the same time, there are countless people with the willingness and time to offer a listening ear but no platform to facilitate this exchange. Talkiyo bridges this gap by creating a marketplace where people can buy and sell time, fostering genuine human connections.
                    </span>
                    <br />
                    <br />
                    <span className={styles.contenSection}>
                        The inspiration behind Talkiyo came from the growing need for accessible, empathetic listeners who can provide support without the barriers of formal therapy or counseling. We envisioned a platform where anyone, regardless of their background, can find someone to talk to or offer their listening skills, making emotional support both affordable and flexible.
                    </span>
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
                        <span className={styles.time}>15 Mintes Talk Time</span>

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>STANDARD PLAN
                        </span>
                        <span className={styles.price}>₹199.00</span>

                        <hr>
                        </hr>
                        <span className={styles.time}>30 Mintes Talk Time</span>

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>PREMIUM PLAN</span>
                        <span className={styles.price}>₹399.00</span>

                        <hr>
                        </hr>
                        <span className={styles.time}>1 Hours Talk Time</span>

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>PRO PLAN
                        </span>
                        <span className={styles.price}>₹599.00</span>

                        <hr>
                        </hr>
                        <span className={styles.time}>1 Hours 30 Mintes Talk Time</span>

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>ADVANCED PLAN</span>
                        <span className={styles.price}>₹799.00</span>

                        <hr>
                        </hr>
                        <span className={styles.time}>2 Hours Talk Time
                        </span>

                    </div>
                    <div className={styles.priceCard}>
                        <span className={styles.pricename}>EXCLUSIVE PLAN</span>
                        <span className={styles.price}>₹999.00</span>

                        <hr>
                        </hr>
                        <span className={styles.time}>2 Hours 30 Mintes Talk Time
                        </span>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Home
