import axios from 'axios'
// import {baseURL} from './constants/constants'
import { baseUrl } from './constants/constants';

const instance = axios.create({
    baseURL: baseUrl,
   
  });
  export default instance