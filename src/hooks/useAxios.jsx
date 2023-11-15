import axios from 'axios';
import { useEffect } from 'react';

const secureAxios = axios.create({ baseURL: '/', withCredentials: true });

const useAxios = () => {
  useEffect(() => {
    secureAxios.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log('Axios interceptors error: ', error);
      }
    );
  }, []);
};

export default useAxios;
