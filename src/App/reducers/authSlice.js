import { createSlice } from "@reduxjs/toolkit";
import User from "../../services/models/User";
import { users } from "./usersSlice";
import { useSelector } from "react-redux";
import { authSignupService } from "../../services/authServices";
import { newUserAdded } from "./usersSlice";

const defaultState = {
  User,
  isLoading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState: defaultState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    signIn: (state, action) => {
      state.User = action.payload;
      state.isAuthenticated = true;
    },
    signOut: (state, action) => {
      state.isAuthenticated = false;
      state.User = null;
    },
  },
});

//REDUCER
export default authSlice.reducer;
//REDUCER ACTOINS
export const { setLoading, signIn, signOut } = authSlice.actions;

//SELECTORS
export const isUserLoading = (state) => state.AuthReducer.isLoading;

//ACTOINS
export const SignupAction = (userObj) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const data = await authSignupService(userObj);
    if (data) {
      console.log(data);
    }
    dispatch(newUserAdded(userObj));
    dispatch(setLoading(false));
  };
};

export const SigninAction = (userObj) => {
  const allUsers = useSelector(users);
  const { email, password } = userObj;
  const isUserExist = allUsers.find(
    (user) => user.email === email && user.password === password
  );

  return isUserExist ? true : false;

  // return async (dispatch) => {
  //     dispatch(setLoading(true));
  //     const data = await authSigninService(userObj);

  //     if (data) {
  //         console.log("use exist");
  //     } else {
  //         console.log("user does not exist");
  //     }
  //     dispatch(setLoading(false));
  // };
};
