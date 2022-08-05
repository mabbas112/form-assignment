import http from "./httpServices";
import { categoriesApi } from "./constants/constants";

export const setCategoriesService = async () => {
    try {
        const { data } = await http.get(categoriesApi);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}

export const setAddCategoryService = async (category) => {
    try {
        const { data } = await http.post(categoriesApi, category);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}