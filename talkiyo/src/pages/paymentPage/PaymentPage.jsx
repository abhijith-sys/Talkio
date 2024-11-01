import React, { useState, useEffect } from 'react';
import styles from './PaymentPage.module.css'; // Assuming your styles will go here
import NavBar from '../../components/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import { getOtp, getPglist, verifyOtpAndPhone } from '../../services/paymentService';

// Full page loader component
const FullPageLoader = () => (
    <div className={styles.loaderOverlay}>
        <div className={styles.loader}></div>
    </div>
);
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
    const [loading, setLoading] = useState(false); // Track loading state
    const [UserId, setUserId] = useState("")
    const [pgList, setpgList] = useState([])
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPaymentMode, setSelectedPaymentMode] = useState(null);

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

    const setPgList = async () => {
        try {
            const response = await getPglist();
            console.log(response);
            setpgList(response?.data)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        initialilzeValues()
        setPgList();
    }, [])


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
       // Close the modal after selection
        if (validatePhoneNumber(mobileNumber)) {
            setMobileError('');
            setLoading(true); // Start loading
            try {
                const data = {
                    phoneNumber: "+91" + mobileNumber
                };
                const response = await getOtp(data);
                console.log(response);
                localStorage.setItem("phone", mobileNumber);
                localStorage.setItem("Uid", response?.userId);

                setOtpSent(true); // Show the OTP input field
                setOtpError('');
                startResendTimer(); // Start the resend timer
                toggleModal();
            } catch (error) {
                console.log(error);
                setMobileError(error?.response?.data?.message);
            } finally {
                setLoading(false); // Stop loading
            }
        } else {
            setMobileError('Please enter a valid 10-digit mobile number.');
        }
    };

    // Function to verify OTP
    const verifyOtp = async () => {
        setLoading(true); // Start loading
        try {
            const data = { otp: otp, phoneNumber: "+91" + mobileNumber, planId: id ,handle_key:selectedPaymentMode};
            const response = await verifyOtpAndPhone(data);
            console.log(response.data);
            setOtpVerified(true);
            window.location.href = response?.data;
        } catch (error) {
            setOtpError(error?.response?.data?.message);
        } finally {
            setLoading(false); // Stop loading
        }
    };


    // Function to toggle the modal
    const toggleModal = () => setModalOpen(!isModalOpen);
    // Function to handle payment mode selection
    const handleSelectPaymentMode = (mode) => {
        setSelectedPaymentMode(mode);
        toggleModal(); // Close the modal after selection
    };

    return (
        <div className={styles.container}>
            <NavBar />
            {loading && <FullPageLoader />}
            <div className={styles.containerSub}>

                <h6 className={styles.heading}>Enter your phone number registered in the Talkiyo app</h6>
                <input
                    type="tel"
                    className={styles.inputField}
                    placeholder="Enter mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    disabled={otpSent || loading} // Disable phone number input during loading or after OTP is sent
                />
                {mobileError && <p className={styles.error}>{mobileError}</p>}

                {!otpSent && (
                    <button className={styles.payButton} onClick={requestOtp} disabled={loading}>
                        {loading ? 'Sending OTP...' : 'Send OTP'}
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
                            disabled={loading} // Disable OTP input during loading
                        />
                        {otpError && <p className={styles.error}>{otpError}</p>}

                        <button className={styles.payButton} onClick={verifyOtp} disabled={loading}>
                            {loading ? 'Verifying OTP...' : 'Verify OTP'}
                        </button>

                        {!resendAvailable ? (
                            <p className={styles.payButtonEX}>
                                Resend OTP in {timer} seconds
                            </p>
                        ) : (
                            <button className={styles.payButton} onClick={requestOtp} disabled={loading}>
                                {loading ? 'Sending OTP...' : 'Resend OTP'}
                            </button>
                        )}
                    </>
                )}
                {/* Modal */}
                {isModalOpen && (
                    <div style={{
                        position: 'fixed', top: '0', left: '0', right: '0', bottom: '0',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <div style={{
                            backgroundColor: '#fff', padding: '20px', borderRadius: '8px', width: '300px', textAlign: 'center'
                        }}>
                            <h2>Select Payment Mode</h2>

                            {/* List of payment modes */}
                            {pgList.map((mode) => (
                                <button
                                    key={mode.id}
                                    onClick={() => handleSelectPaymentMode(mode?.handle_key)}
                                    style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', cursor: 'pointer' }}
                                >
                                    {mode?.name}
                                </button>
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentPage;
