import http from "./httpServices";
import { productsApi } from "./constants/constants";

export const addProductService = async (product) => {
    try {
        const { data } = await http.post(productsApi, product)
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null);
    }
}


export const setProductsService = async () => {
    try {
        const { data } = await http.get(productsApi );
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null);
    }
}