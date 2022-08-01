import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authSlice";
import UsersReducer from './reducers/usersSlice'

const store = configureStore({
  reducer: {
    AuthReducer,
    UsersReducer
  },
});

export default store;
