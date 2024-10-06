

import axios from 'axios';

const API_URL = "https://tiktik.ap-southeast-2.elasticbeanstalk.com/index";
// const API_URL = "https://api.talkiyo.xyz";
// 
export const getOtp = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/sendOtpWebsite`, data);
        return response.data; // Return the data or handle it as needed
    } catch (error) {
        console.error("Error fetching OTP:", error);
        throw error; // Optionally rethrow the error to handle it later
    }
};

export const verifyOtpAndPhone = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/phonePayCreatePayment`, data);
        return response.data; // Return the data or handle it as needed
    } catch (error) {
        console.error("Error fetching OTP:", error);
        throw error; // Optionally rethrow the error to handle it later
    }
};

export const getPlans = async () => {
    try {
        const response = await axios.get(`${API_URL}/getPlansForWebsite`);
        return response.data; // Return the data or handle it as needed
    } catch (error) {
        console.error("Error fetching OTP:", error);
        throw error; // Optionally rethrow the error to handle it later
    }
};