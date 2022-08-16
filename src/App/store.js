import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authSlice";
import UsersReducer from './reducers/usersSlice'
import AdminReducer from './reducers/admin/authSlice'
import ProductReducer from './reducers/productsSlice'
import CategoriesReducer from './reducers/categorySlice'
import CartReducer from './reducers/cartSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CollectionsReducer from './reducers/collectionSlice'


// redux-persisting AdminReducer
const persistAdminConfig = {
  key: 'root',
  storage
}
const persistUserConfig ={
  key: 'user',
  storage
}

export const persistedAdminReducer = persistReducer(persistAdminConfig, AdminReducer)
export const persistedUserAuthReducer = persistReducer(persistUserConfig, AuthReducer)


const store = configureStore({
  reducer: {
    persistedUserAuthReducer,
    UsersReducer,
    persistedAdminReducer,
    ProductReducer,
    CategoriesReducer,
    CartReducer,
    CollectionsReducer
  },
});

export const persistor = persistStore(store);
export default store;
