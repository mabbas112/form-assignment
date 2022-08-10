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
export const deleteCategoryService = async (category) => {
    try {
        const { data } = await http.delete('https://estore-f25b3-default-rtdb.firebaseio.com/categories/' + category.id + '.json');
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}
export const editCategoryService = async (category) => {
    try {
        const { data } = await http.put('https://estore-f25b3-default-rtdb.firebaseio.com/categories/' + category.id + '.json', { name: category.name });
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}