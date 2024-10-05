import React, { useState, useEffect } from 'react';
import styles from './PaymentPage.module.css'; // Assuming your styles will go here
import NavBar from '../../components/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import { getOtp, verifyOtpAndPhone } from '../../services/paymentService';


const PaymentPage = () => {
    const { id } = useParams();
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState(''); // Store the OTP
    const [otpSent, setOtpSent] = useState(false); // Track OTP sent status
    const [otpVerified, setOtpVerified] = useState(false); // Track OTP verification status
    const [mobileError, setMobileError] = useState('');
    const [otpError, setOtpError] = useState('');
    const [resendAvailable, setResendAvailable] = useState(false); // To track resend availability
    const [timer, setTimer] = useState(30); // Timer for 30 seconds

    // Function to validate the phone number (exactly 10 digits)
    const validatePhoneNumber = (number) => {
        const phoneRegex = /^[0-9]{10}$/; // Regular expression for exactly 10 digits
        return phoneRegex.test(number);
    };

    // Function to start the resend timer
    const startResendTimer = () => {
        setResendAvailable(false);
        setTimer(30); // Reset the timer to 30 seconds
    };

    // UseEffect to handle the countdown timer
    useEffect(() => {
        let countdown;
        if (otpSent && !resendAvailable && timer > 0) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        if (timer === 0) {
            setResendAvailable(true); // Enable "Resend OTP" button
        }

        return () => clearInterval(countdown);
    }, [otpSent, resendAvailable, timer]);


    // Function to request OTP
    const requestOtp = async () => {
        if (validatePhoneNumber(mobileNumber)) {
            setMobileError('');
            try {
                const data = {
                    phoneNumber: "+91" + mobileNumber
                }
                const response = await getOtp(data);
                console.log(response);


                setOtpSent(true); // Show the OTP input field
                setOtpError('');
                startResendTimer(); // Start the resend timer
            } catch (error) {
                console.log(error);

                setMobileError(error?.response?.data?.message);
            }
        } else {
            setMobileError('Please enter a valid 10-digit mobile number.');
        }
    };



    // Function to verify OTP
    const verifyOtp = async () => {
        try {
            const data = { otp: otp, phoneNumber: "+91" + mobileNumber, planId: id }
            const response = await verifyOtpAndPhone(data);
            console.log(response.data.data.instrumentResponse.redirectInfo.url);
            setOtpVerified(true);
            window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
        } catch (error) {
            setOtpError(error?.response?.data?.message);

        }

    };



    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.containerSub}>
                <h6 className={styles.heading}>Enter your phone number registered in the Talkiyo app</h6>
                <input
                    type="tel"
                    className={styles.inputField}
                    placeholder="Enter mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    disabled={otpSent} // Disable phone number input after OTP is sent
                />
                {mobileError && <p className={styles.error}>{mobileError}</p>}

                {!otpSent && (
                    <button className={styles.payButton} onClick={requestOtp}>
                        Send OTP
                    </button>
                )}

                {otpSent && (
                    <>
                        <h6 className={styles.heading}>Enter OTP</h6>
                        <input
                            type="text"
                            className={styles.inputField}
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        {otpError && <p className={styles.error}>{otpError}</p>}

                        <button className={styles.payButton} onClick={verifyOtp}>
                            Verify OTP
                        </button>

                        {!resendAvailable ? (
                            <p className={styles.payButton}>
                                Resend OTP available in {timer} seconds
                            </p>
                        ) : (
                            <button className={styles.payButton} onClick={requestOtp}>
                                Resend OTP
                            </button>
                        )}
                    </>
                )}

          
            </div>
        </div>
    );
};

export default PaymentPage;
