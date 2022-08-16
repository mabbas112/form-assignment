import { createSlice } from "@reduxjs/toolkit";
import { AdminSigninService } from "../../../services/admin/authService";



const defaultState = {
    admin: {
        email: '',
        password: ''
    },
    isAuthenticated: false,
    isLoading: false
}

const authSlice = createSlice({
    name: 'authReducer',
    initialState: defaultState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setSignIn: (state, action) => {
            const {isAdmin , adminObj} = action.payload;
            state.isAuthenticated = isAdmin;
            state.admin = adminObj;
        },
        setSignOut: (state, action) => {
            state.isAuthenticated = false;
            state.admin = null;
        },
    }
})


//REDUCER
export default authSlice.reducer;

//REDUCER ACTIONS
export const { setLoading, setSignIn, setSignOut } = authSlice.actions;

//SELECTORS
export const selectIsAuthenticated = (state) => state.persistedAdminReducer.isAuthenticated;
export const selectAdmin = (state) => state.persistedReducer.admin;

//ACTOIN CREATORS
export const AdminSigninAction = (adminObj) => async (dispatch) => {
    const data = await AdminSigninService(adminObj);
    console.log(data);
    // const isAdmin = data.email === adminObj.email && data.password === adminObj.password;
    // dispatch(setSignIn({isAdmin,adminObj}));
}