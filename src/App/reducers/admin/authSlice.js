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
            state.isAuthenticated = action.payload
        },
        setSignOut: (state, action) => {
            state.isAuthenticated = action.payload
        },
    }
})


//REDUCER
export default authSlice.reducer;

//REDUCER ACTIONS
export const { setLoading, setSignIn, setSignOut } = authSlice.actions;

//SELECTORS
export const selectIsAuthenticated = (state) => state.AdminReducer.isAuthenticated;
export const selectAdmin = (state) => state.AdminReducer.admin;

//ACTOIN CREATORS
export const AdminSigninAction = (adminObj) => async (dispatch) => {
    const data = await AdminSigninService();
    const isAdmin = data.email === adminObj.email && data.password === adminObj.password;
    dispatch(setSignIn(isAdmin));
}

