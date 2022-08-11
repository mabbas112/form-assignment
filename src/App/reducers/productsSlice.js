import { createSlice } from "@reduxjs/toolkit";
import { addProductService, setProductsService, editProductService, deleteProductService } from "../../services/productsService";

const defaultState = {
    products: [],
    isLoading: false,
    productId: 1
}

const productsSlice = createSlice({
    name: 'productReducer',
    initialState: defaultState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setProducts: (state, action) => {
            state.products = [...action.payload];
        },
        setNewProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        editProduct: (state, action) => {
            state.products = state.products.map((product) => {
                if (product.id === action.payload.id)
                    return action.payload
                else return product;
            })
        },
        deleteProduct: (state, action) => {
            state.products = [...state.products.filter((product) => product.id !== action.payload.id)]
        }
    }
})

//REDUCER
export default productsSlice.reducer;
//REDUCER FUNCTIONS
export const { setIsLoading, setProducts, setNewProduct, editProduct, deleteProduct } = productsSlice.actions;
//SELECTOR
export const selectProducts = (state) => state.ProductReducer.products;
export const selectIsLoading = (state) => state.ProductReducer.isLoading;


//ACTION CREATOR
export const addProductAction = (product) => async (dispatch) => {
    dispatch(setIsLoading(true))
    const data = await addProductService(product);
    dispatch(setNewProduct({ ...product, id: data.name }))
    dispatch(setIsLoading(false))
}

export const setProductAction = () => async (dispatch) => {
    dispatch(setIsLoading(true));
    const data = await setProductsService();
    dispatch(setProducts(transformIntoProduct(data)));
    dispatch(setIsLoading(false));
}
export const editProductAction = (product) => async (dispatch) => {
    await editProductService(product);
    dispatch(editProduct(product));
}
export const deleteProductAction = (product) => async (dispatch) => {
    await deleteProductService(product);
    dispatch(deleteProduct(product));
}


const transformIntoProduct = (data) => {
    const productIDs = Object.keys(data);
    const productData = Object.values(data);
    const products = productData.map((product, index) => ({ ...product, id: productIDs[index] }));
    return products
}