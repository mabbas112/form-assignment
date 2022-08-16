import http from '../httpServices'
// import { adminApi } from "../constants/adminConstants";

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvQnkBC1XhcOeYlW1OiY6eT1SiDDrTJnw'

export const AdminSigninService = async (adminObj) => {
    try {
        const data = await http.get(url);
        console.log(data);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}; 