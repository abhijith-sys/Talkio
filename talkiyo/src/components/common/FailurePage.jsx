import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FailurePage = () => {
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
                    <div className="message-box _success _failed">
                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                        <h2>Your payment failed</h2>
                        <p>Try again later</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FailurePage;
