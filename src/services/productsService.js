import http from "./httpServices";
import { productsApi, productApi } from "./constants/constants";

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
        const { data } = await http.get(productsApi);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null);
    }
}

const productId = (product) => productApi + product.id + '.json';

export const editProductService = async (product) => {
    try {
        const { data } = await http.put(productId(product), { ...product });
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}
export const deleteProductService =async (product) => {
    try {
        const { data } = await http.delete(productId(product));
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}
