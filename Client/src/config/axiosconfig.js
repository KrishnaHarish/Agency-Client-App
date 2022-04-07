
import axios from "axios";
var url = 'http://localhost:4000/' || process.env.PORT;

const token = localStorage.getItem('token');
console.log(token, ' -----in config')

const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ` + token
    }
})

export default axiosInstance