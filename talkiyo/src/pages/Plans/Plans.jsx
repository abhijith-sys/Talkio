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
            navigate(`/payment/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

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
