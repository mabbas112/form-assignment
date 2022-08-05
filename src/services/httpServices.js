import axios from "axios";
import { firebaseURL } from './constants/constants'



axios.defaults.baseURL = firebaseURL;


const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

export default http;