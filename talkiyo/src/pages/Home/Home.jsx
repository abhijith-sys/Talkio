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
                    The Talkiyo LLP app is India’s leading platform for emotional wellness and online counselling, designed to provide support when you need it most. In a world that has changed significantly since the COVID-19 pandemic, Talkiyo LLP makes it simple to seek help from the comfort of your home.                        
                                          </span>


                    <br />
                    <br />
                    <span className={styles.contenSection}>
                    Whether you're dealing with depression, anxiety, relationship issues, or feelings of loneliness, the Talkiyo LLP app connects you with our counsellors through easy-to-access consultations. Sometimes, all it takes is a friendly ear and a shoulder to lean on to help you through tough times. Talkiyo LLP focuses on emotional wellness, offering you a safe space to talk openly about your struggles and receive the compassionate support you deserve—all available through our app for your convenience.                    </span>
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
                            <span className={styles.pricename}>{data?.planName}</span>
                            <span className={styles.price}>{data?.amount}</span>

                            <hr>
                            </hr>
                            <span className={styles.time}>{data?.coins || 0} Minutes talk time</span>
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
