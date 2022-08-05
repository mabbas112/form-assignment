import http from '../httpServices'
import { adminApi } from "../constants/adminConstants";

export const AdminSigninService = async () => {
    try {
        const { data } = await http.get(adminApi);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}; 