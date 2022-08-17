import { configureStore } from "@reduxjs/toolkit";
import UserAuthReducer from "./reducers/authSlice";
import AdminReducer from './reducers/admin/authSlice'
import ProductReducer from './reducers/productsSlice'
import CategoriesReducer from './reducers/categorySlice'
import CartReducer from './reducers/cartSlice'
import CollectionsReducer from './reducers/collectionSlice'

const store = configureStore({
  reducer: {
    UserAuthReducer,
    AdminReducer,
    ProductReducer,
    CategoriesReducer,
    CartReducer,
    CollectionsReducer
  },
});

export default store;




//REDUX-PERSIST LIBRARY

// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// redux-persisting AdminReducer
// const persistAdminConfig = {
//   key: 'root',
//   storage
// }
// const persistUserConfig ={
//   key: 'user',
//   storage
// }
// export const persistedAdminReducer = persistReducer(persistAdminConfig, AdminReducer)
// export const persistedUserAuthReducer = persistReducer(persistUserConfig, AuthReducer)

// export const persistor = persistStore(store);