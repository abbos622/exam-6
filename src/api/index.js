import axios from "axios";


const instance = axios.create({
    baseURL: "http://makeup-api.herokuapp.com/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    timeout: 10000
})

export default instance