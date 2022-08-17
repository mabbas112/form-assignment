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
        setNewCategory: (state, action) => {
            state.categories = [...state.categories, action.payload];
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter(category => category.id !== action.payload.id)
        },
        editCategory: (state, action) => {
            state.categories = state.categories.map(category => category.id === action.payload.id ? action.payload : category)
        }
    }

});


export default categorySlice.reducer;
//REDUCER FUNCTIONS
export const { setCategories, setNewCategory, deleteCategory, editCategory } = categorySlice.actions;
//SELECTOR
export const selectCategories = (state) => state.CategoriesReducer.categories;

//ACTION CREATORS 
export const setCategoriesAction = () => async (dispatch) => {
    const data = await setCategoriesService();
    dispatch(setCategories(transformedCategory(data)));
}
export const setNewCategoryAction = (category) => async (dispatch) => {
    const data = await setAddCategoryService(category);
    dispatch(setNewCategory({ ...category, id: data.name }))
}
export const deleteCategoryAction = (category) => async (dispatch) => {
    await deleteCategoryService(category);
    dispatch(deleteCategory(category));
}
export const editCategoryAction = (category) => async (dispatch) => {
    await editCategoryService(category);
    dispatch(editCategory(category));
}



const transformedCategory = (data) => {
    const categoryIDs = Object.keys(data);
    const categoryData = Object.values(data);
    return categoryData.map((category, index) => ({ ...category, id: categoryIDs[index] }));
}