import { createSlice } from "@reduxjs/toolkit";
import { authSignupService, authSigninService } from "../../services/authServices";

const defaultUser = {
  name: '',
  email: localStorage.getItem('user'),
  password: '',
};

const defaultState = {
  user: defaultUser,
  isLoading: false,
  isAuthenticated: localStorage.getItem('token'),
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
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.idToken;
    },
    signOut: (state, action) => {
      state.isAuthenticated = null;
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
export const selectIsUserLoading = (state) => state.UserAuthReducer.isLoading;
export const selectIsUserAuthenticated = (state) => state.UserAuthReducer.isAuthenticated;
export const selectIsUserExist = (state) => state.UserAuthReducer.isUserExist;
export const selectUser = (state) => state.UserAuthReducer.user;

//ACTOINS
export const SignupAction = (userObj) => async (dispatch) => {

  dispatch(setLoading(true));
  const response = await authSignupService(userObj);
  if (response !== 400) {
    dispatch(signIn({ user: userObj, idToken: response.idToken }))
    localStorage.setItem('token', response.idToken)
    localStorage.setItem('user', userObj.email);
  } else {
    alert('User already exist')
  }

  dispatch(setLoading(false));

};

export const SigninAction = (userObj) => async (dispatch) => {

  dispatch(setLoading(true));
  const response = await authSigninService(userObj);

  if (response !== 400) {
    dispatch(signIn({ user: userObj, idToken: response.idToken }))
    localStorage.setItem('token', response.idToken)
    localStorage.setItem('user', userObj.email)
  } else {
    alert('check credentials,otherwise create account')
  }

  dispatch(setLoading(false));

};

export const SignoutAction = () => async (dispatch) => {
  dispatch(signOut(null));
  localStorage.removeItem('token');
  localStorage.removeItem('user')
};

