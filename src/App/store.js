import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authSlice";
import UsersReducer from './reducers/usersSlice'
import AdminReducer from './reducers/admin/authSlice'
import ProductReducer from './reducers/productsSlice'
import CategoriesReducer from './reducers/categorySlice'
import CartReducer from './reducers/cartSlice'

const store = configureStore({
  reducer: {
    AuthReducer,
    UsersReducer,
    AdminReducer,
    ProductReducer,
    CategoriesReducer,
    CartReducer
  },
});

export default store;
