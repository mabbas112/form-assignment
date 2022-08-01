import { createSlice } from "@reduxjs/toolkit";
import { setAllUsersService } from "../../services/usersServices";

const defaultState = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersReducer",
  initialState: defaultState,
  reducers: {
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
    addNewUser: (state, action) => {
      state.users = [action.payload, ...state.users]
    },
  },
});

export default usersSlice.reducer;
export const { setAllUsers, newUserAdded } = usersSlice.actions;

//SELECTORS
export const selectUsers = (state) => state.UsersReducer.users;

//ACTIONS

export const setUsersAction = () => async (dispatch) => {

  const data = await setAllUsersService();

  const dummyArray = [];
  for (const key in data) dummyArray.push(data[key]);
  dispatch(setAllUsers(dummyArray));
};

