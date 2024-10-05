import React, { useEffect, useState } from 'react';
import styles from "./Plans.module.css"
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getPlans } from '../../services/paymentService';

const Plans = () => {
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
        <div className={styles.contentprise} >

            <NavBar />
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
    )
}

export default Plans
