import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersService } from "../../services/usersServices";

const defaultState = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersReducer",
  initialState: defaultState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    addNewUser: (state, action) => {
      state.users = [action.payload, ...state.users]
    },
  },
});

export default usersSlice.reducer;
export const { getAllUsers, newUserAdded } = usersSlice.actions;

//SELECTORS
export const users = (state) => state.UsersReducer.users;

//ACTIONS

export const getUsersAction = () => async (dispatch) => {
    const data = await getAllUsersService();

    const dummyArray = [];
    for (const key in data) dummyArray.push(data[key]);
    dispatch(getAllUsers(dummyArray));
};

