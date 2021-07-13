import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:3000/api/user/v1',
    timeout : 5000
})

instance.interceptors.request.use(function(config){
    console.log(config)
    return config
}, function(err) {
    //handle error
    return Promise.reject(err)
})

instance.interceptors.response.use(function(response){
    return response
}, function(err){
    //system log
    return Promise.reject(err)
})


export default instance;