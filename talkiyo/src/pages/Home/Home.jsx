import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css";
import images from "../../assets/home.svg"
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { getPlans } from '../../services/paymentService';
const Home = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState([]);

    const toPaymentPage = (id) => {
        try {
            // Get stored phone number and Uid
            const phone = localStorage.getItem("phone");
            const Uid = localStorage.getItem("Uid");
    
            // Function to validate phone number (example for 10-digit numbers)
            const isValidPhoneNumber = (phone) => {
                const phoneRegex = /^[0-9]{10}$/; // Regex for a valid 10-digit phone number
                return phoneRegex.test(phone);
            };
    
            // Function to validate Uid length
            const isValidUid = (Uid) => {
                return Uid && Uid.length >= 3; // Check if Uid is not null and has a length of at least 3
            };
    
            // If phone or Uid is null or invalid
            if (!phone || !isValidPhoneNumber(phone) || !isValidUid(Uid)) {
                // Clear localStorage values
                localStorage.removeItem("phone");
                localStorage.removeItem("Uid");
    
                // Navigate to the payment page
                navigate(`/payment/${id}`);
            } else {
                // If both phone and Uid are valid
                navigate(`/register_payment/${id}`);
                console.log("Both phone and Uid are valid.");
            }
        } catch (error) {
            console.log("Error during navigation:", error);
        }
    };
    

    const getAllPlans = async () => {
        try {
            const response = await getPlans();
            console.log(response);
            setPlans(response?.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllPlans()
    }, [])

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
                {
                    plans.map((data) => {
                        return <div className={styles.priceCard} key={data.id}>
                            <span className={styles.pricename}>{data.planName}</span>
                            <span className={styles.price}>{data.amount}</span>

                            <hr>
                            </hr>
                            {/* <span className={styles.time}>15 Mintes Talk Time</span> */}
                            <div className={styles.paybtn} onClick={() => toPaymentPage(data?.id)}>Pay Now</div>

                        </div>
                    })
                }
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Home
