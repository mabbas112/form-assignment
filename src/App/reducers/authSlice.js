import { createSlice } from "@reduxjs/toolkit";
import { authSignupService } from "../../services/authServices";
import { addNewUser } from "./usersSlice";

const defaultUser = {
  name: '',
  email: '',
  password: '',
};

const defaultState = {
  user: defaultUser,
  isLoading: false,
  isAuthenticated: false,
  isUserExist: false,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState: defaultState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    signIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signOut: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setIsUserExist: (state, action) => {
      state.isUserExist = action.payload;
    },

  },
});

//REDUCER
export default authSlice.reducer;
//REDUCER ACTOINS
export const { setLoading, signIn, signOut, setIsUserExist } =
  authSlice.actions;

//SELECTORS
export const selectIsUserLoading = (state) => state.persistedUserAuthReducer.isLoading;
export const selectIsUserAuthenticated = (state) => state.persistedUserAuthReducer.isAuthenticated;
export const selectIsUserExist = (state) => state.persistedUserAuthReducer.isUserExist;
export const selectUser = (state) => state.persistedUserAuthReducer.user;

//ACTOINS
export const SignupAction = (userObj) => async (dispatch, getState) => {

  dispatch(setLoading(true));
  const users = getState().UsersReducer.users;
  const isExist = users.some((user) => user.email === userObj.email);
  if (!isExist) {
    await authSignupService(userObj);
    dispatch(addNewUser(userObj));
    dispatch(signIn(userObj));
  }

  dispatch(setIsUserExist(isExist));
  dispatch(setLoading(false));
};

export const SigninAction = (userObj) => async (dispatch, getState) => {

  dispatch(setLoading(true));
  const users = getState().UsersReducer.users;
  const isExist = users.some(
    (user) => user.email === userObj.email && user.password === userObj.password
  );
  isExist && dispatch(signIn(userObj));
  dispatch(setLoading(false));

};

export const SignoutAction = () => async (dispatch) => {
  dispatch(signOut(null));
};

