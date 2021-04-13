import axios from 'axios';
import { BASE_URL } from '../constants/api';
import { TOKEN } from '../constants/storage';

const instance = axios.create({
  baseURL: `${BASE_URL}/` ,
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
  }
});

export default instance;