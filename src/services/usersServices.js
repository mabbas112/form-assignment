import http from "./httpServices";
import { userApi } from "./constants/constants";

export const setAllUsersService = async () => {
  try {
    const { data } = await http.get(userApi);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(null);
  }
};
