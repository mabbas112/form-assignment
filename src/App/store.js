import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authSlice";
import UsersReducer from './reducers/usersSlice'
import AdminReducer from './reducers/admin/authSlice'
import ProductReducer from './reducers/productsSlice'
import CategoriesReducer from './reducers/categorySlice'
import CartReducer from './reducers/cartSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


//redux-persisting AdminReducer
const persistConfig = {
  key: 'root',
  storage
}
export const persistedReducer = persistReducer(persistConfig, AdminReducer)


const store = configureStore({
  reducer: {
    AuthReducer,
    UsersReducer,
    persistedReducer,
    ProductReducer,
    CategoriesReducer,
    CartReducer
  },
});

export const persistor = persistStore(store);
export default store;
