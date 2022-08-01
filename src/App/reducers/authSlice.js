import { createSlice } from "@reduxjs/toolkit";
import User from "../../services/models/User";
import { authSignupService, getDataService } from "../../services/authServices";


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
  // use redux state
  const users = getState().UsersReducer.user

  console.log({ users })
  // some
  // let isExist = userArray.some((user)=> user.email===userObj.email);
  // for (const key in users) {
  //   if (users[key].email === userObj.email) {
  //     isExist = true;
  //     break;
  //   }
  // }
  let isExist = false

  if (isExist) {
    dispatch(setExistance(true));
    console.log('User already exist')
  }
  else {
    await authSignupService(userObj);
  }

  dispatch(setLoading(false));
};

export const SigninAction = (userObj) => {
  return async (dispatch) => {

    dispatch(setLoading(true));
    const data = await getDataService();

    for (const key in data) {
      if (data[key].email === userObj.email && data[key].password === userObj.password) {
        dispatch(signIn(userObj));
      }
    }
    dispatch(setLoading(false));
  };
};

export const SignoutAction = () => {
  return async (dispatch) => {
    dispatch(signOut(null));
  }
}
