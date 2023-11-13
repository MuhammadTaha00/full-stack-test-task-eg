import axios, { AxiosError, AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default api;
