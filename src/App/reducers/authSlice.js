import { createSlice } from "@reduxjs/toolkit";
import User from "../../services/models/User";
import { authSignupService } from "../../services/authServices";
import { addNewUser } from "./usersSlice";


const defaultState = {
  User,
  isLoading: false,
  isAuthenticated: false,
  isAlreadyExist: false
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
    setExistance: (state, action) => {
      state.isAlreadyExist = action.payload;
    }
  },
});

//REDUCER
export default authSlice.reducer;
//REDUCER ACTOINS
export const { setLoading, signIn, signOut, setExistance } = authSlice.actions;

//SELECTORS
export const isUserLoading = (state) => state.AuthReducer.isLoading;
export const isUserAuthenticated = (state) => state.AuthReducer.isAuthenticated;


//ACTOINS
export const SignupAction = (userObj) => async (dispatch, getState) => {

  dispatch(setLoading(true));

  const users = getState().UsersReducer.users
  let isExist = users.some((user) => user.email === userObj.email);

  if (isExist) {
    dispatch(setExistance(true));
    console.log('User already exist')
  }
  else {
    await authSignupService(userObj);
    dispatch(addNewUser(userObj));
  }

  dispatch(setLoading(false));
};

export const SigninAction = (userObj) => async (dispatch, getState) => {

  dispatch(setLoading(true));
  const users = getState().UsersReducer.users
  let isExist = users.some((user) => user.email === userObj.email && user.password === userObj.password)
  if (isExist)
    dispatch(signIn(userObj));
  else {
    console.log('User does not exist')
  }
  dispatch(setLoading(false));

};

export const SignoutAction = () => {
  return async (dispatch) => {
    dispatch(signOut(null));
  }
}
