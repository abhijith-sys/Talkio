import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PendingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Set a timeout of 20 seconds to navigate to another page
        const timer = setTimeout(() => {
            navigate('/plans'); // Replace '/thanks' with your desired route
        }, 10000); // 20 seconds in milliseconds

        // Cleanup the timeout when the component is unmounted
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="message-box _success  _pending">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <h2>Your payment is pending</h2>
                        <p>
                            Your payment is currently being processed. You will receive a notification once the payment is successful on the Talkiyo app.<br />
                            Thank you for your patience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PendingPage;
