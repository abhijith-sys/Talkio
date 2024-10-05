import React, { useState, useEffect } from 'react';
import styles from './RegistedUser.module.css'; // Assuming your styles will go here
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate, useParams } from 'react-router-dom';
import { getOtp, verifyOtpAndPhone } from '../../services/paymentService';

// Full page loader component
const FullPageLoader = () => (
    <div className={styles.loaderOverlay}>
        <div className={styles.loader}></div>
    </div>
);
const RegisterdUser = () => {
    const navigate= useNavigate()
    const { id } = useParams();
    const [mobileNumber, setMobileNumber] = useState('');
    const [loading, setLoading] = useState(false); // Track loading state
    const [UserId, setUserId] = useState("")

    const initialilzeValues = () => {
        try {
            const number = localStorage.getItem("phone");
            const Uid = localStorage.getItem("Uid");

            if (number) {
                setMobileNumber(number);
            }
            if (Uid) {
                setUserId(Uid);
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        initialilzeValues()

    }, [])




    // Function to verify OTP
    const verifyOtp = async () => {
        setLoading(true); // Start loading
        try {
            const data = { otp: otp, phoneNumber: "+91" + mobileNumber, planId: id };
            const response = await verifyOtpAndPhone(data);
            window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    };
    const handleLogout = () => {
        // Show a confirmation dialog
        const confirmLogout = window.confirm("Are you sure you want to log out?");
    
        if (confirmLogout) {
            // Clear any stored user data (e.g., token, user details)
            localStorage.removeItem("phone");
            localStorage.removeItem("Uid");
    
            // Redirect to login or home page after logout
            navigate("/plans"); // Adjust the path based on your app
        } else {
            // User cancelled the logout
            console.log("Logout cancelled");
        }
    };
    
    return (
        <div className={styles.container}>
            <NavBar />
            {loading && <FullPageLoader />}
            <div className={styles.containerSub}>

                <h6 className={styles.heading}>{UserId} Welcome to  Talkiyo </h6>
                <input
                    type="tel"
                    className={styles.inputField}
                    placeholder="Enter mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    disabled={true} // Disable phone number input during loading or after OTP is sent
                />

                <div>
                    <button className={styles.payButton} onClick={verifyOtp} disabled={loading}>
                        Continue
                    </button>
                    <button className={styles.cancelButton} onClick={handleLogout} disabled={loading}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterdUser
