import { useEffect } from 'react';
import axios from 'axios';

import fetchData from '../axios/interceptors';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await fetchData('/react-store-products');
      const resp2 = await axios(randomUserUrl);

      console.log(resp1);
      console.log(resp2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
