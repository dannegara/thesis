import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS,
} from 'react-admin';
import { login } from '../api/auth';
import { TOKEN, ROLE } from '../constants/storage';

const authProvider = async (type, params) => {

  if (type === AUTH_LOGIN) {
    const { username, password } = params;
  
    try {
      const { data: { access_token, role } } = await login(username, password);

      localStorage.setItem(TOKEN, access_token);
      localStorage.setItem(ROLE, role);

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
    localStorage.removeItem(ROLE);

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

  if(type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem(ROLE);

    return role ? Promise.resolve(role) : Promise.reject();
  }

  return Promise.resolve();
}

export default authProvider;