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
    if (error.response === 404) {
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);

export default fetchData;
