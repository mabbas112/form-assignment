import axios from "axios";
import { firebaseURL } from "./models/env";

export const authSignupService = async (userObj) => {
  try {
    const { data, status } = await axios.post(
      firebaseURL + "/user.json",
      userObj
    );
    if (status === 200) return data;
  } catch (error) {
    console.log("Could not send");
  }
};

export const authSigninService = async (userObj) => {
  try {
    const { data, status } = await axios.get(firebaseURL + "/user.json");
    if (status === 200) return data;
  } catch (error) {
    console.log("Could not Get");
  }
};
