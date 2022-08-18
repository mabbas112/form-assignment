import { Fragment, useEffect } from "react";
import SignupForm from "Components/auth/signup"; 
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Route, Routes } from "react-router-dom";
import SigninForm from "Components/auth/signin";
import AdminSigninForm from "Components/admin/auth/signin";
import { setProductAction } from "app/reducers/productsSlice";
import { setCategoriesAction } from "app/reducers/categorySlice";
import Categories from "Components/admin/dashboard/categories";
import NewCategoryForm from "Components/admin/dashboard/categories/newCategoryForm";
import ProductForm from "./Components/admin/dashboard/products/productForm";
import Products from "./Components/admin/dashboard/products";
import DefaultDashBoard from "./Components/dashboard";
import CartItems from "./Components/dashboard/cart/cartItems";
import ProductDetail from "./Components/dashboard/products/productDetail";
import CategoryProducts from "./Components/dashboard/cart/categoryProducts";
import GenericProducts from "./Components/dashboard/products";
import Collections from "./Components/dashboard/collections";
import { selectIsUserAuthenticated } from "./app/reducers/authSlice";
import { getCollectionsAction, setAllOrderAction } from "./app/reducers/collectionSlice";
import Orders from "./Components/admin/dashboard/orders";
import OrderDetail from "./Components/admin/dashboard/orders/orderDetail";
import Dashboard from "./Components/admin/dashboard";
import Summary from "./Components/admin/dashboard/summary";

function App() {
  const dispatch = useAppDispatch();
  const userAuthenticated = useAppSelector(selectIsUserAuthenticated);

  useEffect(() => {
    //Set all product to products slice
    dispatch(setProductAction());
    //Set all categories to categories slice
    dispatch(setCategoriesAction());
    //Set all users to users slice
    dispatch(setAllOrderAction());

    if (userAuthenticated === localStorage.getItem('token'))
      dispatch(getCollectionsAction());

  }, [dispatch, userAuthenticated])


  return (
    <Fragment>
      <Routes>


        <Route path="/" element={<DefaultDashBoard />} >
          <Route path="" element={<GenericProducts />} />
          <Route path="collections" element={<Collections />} />
          <Route path="cartitems" element={<CartItems />} />
          <Route path="productdetail/:productid" element={<ProductDetail />} />
          <Route path="/:category" element={<CategoryProducts />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<Dashboard />}>
          <Route path="" element={<Summary />} />
          <Route path="categories" element={<Categories />} />
          <Route path="newcategory" element={<NewCategoryForm />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productid" element={<ProductForm />} />
          <Route path="newproduct" element={<ProductForm />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderid" element={<OrderDetail />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>


        <Route path="/admin/signin" element={<AdminSigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />

      </Routes>
    </Fragment>
  );
}

export default App;
