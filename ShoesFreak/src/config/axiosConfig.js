import axios from 'axios';

// Set up an interceptor to attach token to every request
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");  // Retrieve the token from localStorage
    // console.log(token);
    
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;  // Automatically add Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;