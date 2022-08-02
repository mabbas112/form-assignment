import axios from "axios";
import { firebaseURL } from "./models/env";

export const authSignupService = async (userObj) => {
  try {
    const { data } = await axios.post(
      firebaseURL + "/user.json",
      userObj
    );
    return Promise.resolve(data);

  } catch (error) {
    return Promise.resolve(null)
  }
};

export const authSigninService = async () => {
  try {
    const { data, status } = await axios.get(firebaseURL + "/user.json");
    if (status === 200) return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(null)
  }
};
