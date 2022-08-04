import http from "./httpServices";
import { firebaseURL } from "./constants/constants";
import { userApi } from "./constants/constants";

export const authSignupService = async (userObj) => {
  try {
    const { data } = await http.post(firebaseURL + userApi, userObj);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(null)
  }
};

export const authSigninService = async () => {
  try {
    const { data } = await http.get(firebaseURL + userApi);
    return data;
  } catch (error) {
    return Promise.resolve(null)
  }
};
