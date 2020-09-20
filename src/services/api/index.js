import axios from 'axios';
import {BASE_URL} from '../../constants/api';

const APIRequest = axios.create({
  crossDomain: true,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': `application/json`,
  }
});

export default APIRequest;