import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authSlice";
import UsersReducer from './reducers/usersSlice'
import AdminReducer from './reducers/admin/authSlice'
import ProductReducer from './reducers/productsSlice'

const store = configureStore({
  reducer: {
    AuthReducer,
    UsersReducer,
    AdminReducer,
    ProductReducer
  },
});

export default store;
