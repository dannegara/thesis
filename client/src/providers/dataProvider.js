import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { TOKEN } from '../constants/storage';
import { BASE_URL } from '../constants/api';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  const token = localStorage.getItem(TOKEN);

  if(token) {
    options.headers.set('Authorization', `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider(BASE_URL, httpClient);

export default dataProvider;