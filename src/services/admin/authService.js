import http from '../httpServices'
import { signInUrl } from '../constants/constants';

export const AdminSigninService = async (adminObj) => {
    try {
        const { data } = await http.post(signInUrl, {
          email: adminObj.email,
          password: adminObj.password,
          returnSecureToken: true
        });
        return Promise.resolve(data);
      } catch (error) {
        return Promise.resolve(error.response.status)
      }
}; 