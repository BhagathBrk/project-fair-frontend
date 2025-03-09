import axios from 'axios';

const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    };

    try {
        const response = await axios(reqConfig);
        return response;
    } catch (err) {
        console.error("API Error:", err.response ? err.response.data : err.message);
        return err.response ? err.response : { status: 500, data: { message: "Server error" } };
    }
};

export default commonAPI;
