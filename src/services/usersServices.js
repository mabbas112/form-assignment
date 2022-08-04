import http from "./httpServices";
import { userApi } from "./constants/constants";
import { firebaseURL } from "./constants/constants";

export const setAllUsersService = async () => {
  try {
    const { data } = await http.get(firebaseURL + userApi);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(null);
  }
};
