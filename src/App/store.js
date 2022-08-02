import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authSlice";
import UsersReducer from './reducers/usersSlice'
import AdminReducer from './reducers/admin/authSlice'

const store = configureStore({
  reducer: {
    AuthReducer,
    UsersReducer,
    AdminReducer
  },
});

export default store;
