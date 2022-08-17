import { createSlice } from "@reduxjs/toolkit";
import { AdminSigninService } from "../../../services/admin/authService";



const defaultState = {
    admin: {
        email: '',
        password: ''
    },
    isAuthenticated: localStorage.getItem('admin'),
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
            const {admin , idToken} = action.payload;
            state.isAuthenticated = idToken;
            state.admin = admin;
        },
        setSignOut: (state, action) => {
            state.isAuthenticated = null;
            state.admin = null;
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

    const response = await AdminSigninService(adminObj);
    if (response !== 400) {
        dispatch(setSignIn({ admin: adminObj, idToken: response.idToken }))
        localStorage.setItem('admin', response.idToken)
      } else {
        alert('check credentials,otherwise create account')
      }
}

export const AdminSignoutAction = () =>(dispatch) =>{
    dispatch(setSignOut());
    localStorage.removeItem('admin');
}