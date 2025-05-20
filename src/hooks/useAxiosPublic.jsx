import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://foodi-server-rcaa.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
