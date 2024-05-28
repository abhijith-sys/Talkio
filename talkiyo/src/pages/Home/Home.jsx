import React from 'react'
import styles from "./Home.module.css";
import images from "../../assets/home.svg"
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
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
                        our mission is to create meaningful connections and reduce social isolation by providing a platform where anyone can monetize their time and listening skills. We believe in the transformative power of conversation and the significant impact of having someone to talk to, whether it’s to share happiness or seek solace during challenging times.                    </span>
                    <br />
                    <br />
                    <span className={styles.contenSection}>
                        Talkiyo LLP was born from the realization that in today's fast-paced, digitally-driven world, many individuals experience loneliness and isolation. At the same time, there are countless people with the willingness and time to offer a listening ear but no platform to facilitate this exchange. Talkiyo bridges this gap by creating a marketplace where people can buy and sell time, fostering genuine human connections.                    <br />

                    </span>
                    <br />
                    <span className={styles.contenSection}>
                        The inspiration behind Talkiyo came from the growing need for accessible, empathetic listeners who can provide support without the barriers of formal therapy or counseling. We envisioned a platform where anyone, regardless of their background, can find someone to talk to or offer their listening skills, making emotional support both affordable and flexible.                    <br />
                    </span> <br />
                </div>
                <div className={styles.contentRight}>
                    <img src={images} alt="" className={styles.contetnImage} />
                </div>
            </div>

        </div>
    )
}

export default Home
