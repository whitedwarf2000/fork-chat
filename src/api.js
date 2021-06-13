import axios from 'axios';

const mainAxios = axios.create({
  baseURL: `${process.env.API_URL}`,
});

function errorHandler(error) {
  const response = error?.response;

  if (response && response?.status === 401) {
    window.location.href = '/';

    return Promise.reject(new Error('Unauthorized'));
  }

  if (response && response?.status) {
    return Promise.reject(response);
  }

  return Promise.reject(error);
}

mainAxios.interceptors.request.use(
  defaultConfig => defaultConfig,
  error => Promise.reject(error)
);

mainAxios.interceptors.response.use(
  response => response,
  error => errorHandler(error)
);

export default mainAxios;
