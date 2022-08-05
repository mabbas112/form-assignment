import { createSlice } from "@reduxjs/toolkit";
import { setAddCategoryService, setCategoriesService } from "../../services/categoryService";

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
        }
    }

});


export default categorySlice.reducer;
//REDUCER FUNCTIONS
export const { setCategories, setAddCategory } = categorySlice.actions;
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

const transformIntoCategory = (data) => {
    const categoryIDs = Object.keys(data);
    const categoryData = Object.values(data);
    const categories = categoryData.map((category, index) => ({ ...category, id: categoryIDs[index] }));
    return categories
}