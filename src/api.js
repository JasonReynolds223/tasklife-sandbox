import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
})

instance.interceptors.request.use(
  function (config) {  
    var token = localStorage.getItem('access_token')
    // if (!token) {
    //   token = Cookies.get('x-auth-cookie');
    // }
    config.headers['Content-Type'] = 'application/json'

    if (token) {
      console.log(config.headers);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;