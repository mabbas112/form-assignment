import http from "./httpServices";
import { categoriesApi, categoryApi } from "./constants/constants";


const categoryId = (category) => categoryApi + category.id + '.json';

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
        const { data } = await http.delete(categoryId(category));
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}
export const editCategoryService = async (category) => {
    try {
        const { data } = await http.put(categoryId(category), { name: category.name });
        return Promise.resolve(data);
    } catch (error) {
        return Promise.resolve(null)
    }
}
