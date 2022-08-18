import http from "./httpServices";
import { signUpUrl, signInUrl} from "./constants/constants";

export const authSignupService = async (userObj) => {
  try {
    const { data } = await http.post(signUpUrl, {
      email: userObj.email,
      password: userObj.password,
      returnSecureToken: true
    });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error.response.status)
  }
};

export const authSigninService = async (userObj) => {
  try {
    const { data } = await http.post(signInUrl, {
      email: userObj.email,
      password: userObj.password,
      returnSecureToken: true
    });
    console.log(data)
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error.response.status)
  }
};
