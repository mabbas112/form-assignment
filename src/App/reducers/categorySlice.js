import { createSlice } from "@reduxjs/toolkit";
import { setAddCategoryService, setCategoriesService, deleteCategoryService, editCategoryService } from "../../services/categoryService";

const defaultState = {
    categories: []
}

const categorySlice = createSlice({
    name: 'categoryReducer',
    initialState: defaultState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = [...action.payload]
        },
        setAddCategory: (state, action) => {
            state.categories = [...state.categories, action.payload];
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload.id)
        },
        editCategory: (state, action) => {
            const filteredCategories = state.categories.filter((category) => category.id !== action.payload.id)
            state.categories=[...filteredCategories, action.payload];
        }
    }

});


export default categorySlice.reducer;
//REDUCER FUNCTIONS
export const { setCategories, setAddCategory, deleteCategory, editCategory } = categorySlice.actions;
//SELECTOR
export const selectCategories = (state) => state.CategoriesReducer.categories;

//ACTION CREATORS 
export const setCategoriesAction = () => async (dispatch) => {
    const data = await setCategoriesService();
    dispatch(setCategories(transformIntoCategory(data)));
}
export const setAddCategoryAction = (category) => async (dispatch) => {
    const data = await setAddCategoryService(category);
    dispatch(setAddCategory({ ...category, id: data.name }))
}
export const deleteCategoryAction = (category) => async (dispatch) => {
    await deleteCategoryService(category);
    dispatch(deleteCategory(category));
}
export const editCategoryAction = (category) => async (dispatch) => {
    await editCategoryService(category);
    dispatch(editCategory(category));
}



const transformIntoCategory = (data) => {
    const categoryIDs = Object.keys(data);
    const categoryData = Object.values(data);
    const categories = categoryData.map((category, index) => ({ ...category, id: categoryIDs[index] }));
    return categories
}