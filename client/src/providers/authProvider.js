import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import { login } from '../api/auth';
import { TOKEN } from '../constants/storage';

const authProvider = async (type, params) => {

  if (type === AUTH_LOGIN) {
    const { username, password } = params;
  
    try {
      const { data: { access_token } } = await login(username, password);

      localStorage.setItem(TOKEN, access_token);

      return Promise.resolve();
    } catch (error) {
      console.log(error);
      return Promise.reject();
    }
  }

  if (type === AUTH_CHECK) {
    return localStorage.getItem(TOKEN)
      ? Promise.resolve()
      : Promise.reject();
  }

  if (type === AUTH_LOGOUT) {
    localStorage.removeItem(TOKEN);

    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    const status  = params.status;

    if (status === 401 || status === 403) {
      localStorage.removeItem(TOKEN);
      
      return Promise.reject();
    }
    
    return Promise.resolve();
  }

  return Promise.resolve();
}

export default authProvider;