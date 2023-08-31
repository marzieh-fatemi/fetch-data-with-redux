import axios from "axios";

const axiosInstanse = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstanse.interceptors.request.use(
  (config) => {
    
    return config;
  },
  (errore) => {
    if (errore.response) {
        console.log('Error Response Data', errore.response.data);
        console.log('Error Response Status', errore.response.status);
        console.log('Error Response Headers', errore.response.headers);
    } else if (errore.request) {
        console.log('Error Request', errore.request);
    } else {
        console.log('Error', errore.message);
    }

    return Promise.reject(errore);
  }
);

axiosInstanse.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstanse;