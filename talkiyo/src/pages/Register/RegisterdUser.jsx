import React, { useState, useEffect } from 'react';
import styles from './RegistedUser.module.css'; // Assuming your styles will go here
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate, useParams } from 'react-router-dom';
import { getOtp, getPglist, verifyOtpAndPhone } from '../../services/paymentService';

// Full page loader component
const FullPageLoader = () => (
    <div className={styles.loaderOverlay}>
        <div className={styles.loader}></div>
    </div>
);
const RegisterdUser = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [mobileNumber, setMobileNumber] = useState('');
    const [loading, setLoading] = useState(false); // Track loading state
    const [UserId, setUserId] = useState("");
    const [pgList, setpgList] = useState([])
    const [isModalOpen, setModalOpen] = useState(false);

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
        initialilzeValues();
        setPgList();

    }, [])




    // Function to verify OTP
    const verifyOtp = async (pG_Mode) => {
        toggleModal();
        setLoading(true); // Start loading
        try {
            const data = { otp: "", phoneNumber: "+91" + mobileNumber, planId: id, userId: UserId ,handle_key:pG_Mode};
            const response = await verifyOtpAndPhone(data);
       
            window.location.href = response?.data;
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

    // Function to toggle the modal
    const toggleModal = () => setModalOpen(!isModalOpen);

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
                    <button className={styles.payButton} onClick={ toggleModal} disabled={loading}>
                        Continue
                    </button>
                    <button className={styles.cancelButton} onClick={handleLogout} disabled={loading}>
                        Cancel
                    </button>
                </div>
            </div>
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
                                onClick={() => verifyOtp(mode?.handle_key)}
                                style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', cursor: 'pointer' }}
                            >
                                {mode?.name}
                            </button>
                        ))}

                    </div>
                </div>
            )}
        </div>
    );
}

export default RegisterdUser
