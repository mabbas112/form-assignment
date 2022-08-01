import axios from "axios";
import { firebaseURL } from "./models/env";

export const setAllUsersService = async () => {
  try {
    const { data } = await axios.get(firebaseURL + "user.json");
    return Promise.resolve(data);
  } catch (error) {
    return "";
  }
};
