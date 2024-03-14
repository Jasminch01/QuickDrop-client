import axios from "axios";

const url = import.meta.env.VITE_URL;
const axiosSecure = axios.create({
    baseURL : url,
    withCredentials : true,
})

axiosSecure.interceptors.response.use(
    (response) => response,
    async(err) => {
        console.log(err.response);
        if(err.response && (err.response.status === 401 || err.response.status === 403)){
            window.location.replace('/login')
        }
        //clear cookie
        return Promise.reject(err)
    }
)

export default axiosSecure;