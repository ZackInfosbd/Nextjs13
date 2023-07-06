import { useEffect } from 'react';

import axios from 'axios';

const fetchData = axios.create({
  baseURL: 'https://www.course-api.com',
});

fetchData.interceptors.request.use(
  (request) => {
    request.headers['Accept'] = 'application/json';
    console.log('request sent');

    return request;
  },

  (error) => {
    return Promise.reject(error);
  }
);

fetchData.interceptors.response.use(
  (response) => {
    console.log('got response');

    return response;
  },

  (error) => {
    if (error.response.statu === 404) {
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);

// const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await fetchData('/react-store-products');
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
