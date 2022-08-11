import { Fragment, useEffect } from "react";
import SignupForm from "./Components/auth/signup";
import { useAppDispatch, useAppSelector } from "./App/hooks";
import { setUsersAction } from "./App/reducers/usersSlice";
import { Route, Routes } from "react-router-dom";
import SigninForm from "./Components/auth/signin";
import { selectIsUserAuthenticated, SignoutAction } from "./App/reducers/authSlice";
import AdminSigninForm from "./Components/admin/auth/signin";
import { setProductAction } from "./App/reducers/productsSlice";
import { setCategoriesAction } from "./App/reducers/categorySlice";
import Categories from "./Components/admin/dashboard/categories";
import NewCategoryForm from "./Components/admin/dashboard/categories/newCategoryForm";
import NewProductForm from "./Components/admin/dashboard/products/newProductForm";
import Products from "./Components/admin/dashboard/products";
// import Header from "./Components/header";

function App() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsUserAuthenticated);

  const signoutHandler = () => {
    dispatch(SignoutAction())
  }

  useEffect(() => {
    //Set all product to products slice
    dispatch(setProductAction());
    //Set all categories to categories slice
    dispatch(setCategoriesAction());
    //Set all users to users slice
    dispatch(setUsersAction());
  }, [dispatch])

  return (
    <Fragment>
      {/* <Header /> */}

      {isAuthenticated && <button onClick={signoutHandler}>Sign out</button>}
      <Routes>

        <Route path="/admin" element={<AdminSigninForm />}>
          <Route path="categories" element={<Categories />} />
          <Route path="newcategory" element={<NewCategoryForm />} />
          <Route path="products" element={<Products />} />
          <Route path="newproduct" element={<NewProductForm />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>


        <Route path="/signup" exact element={<SignupForm />} />
        <Route path="/signin" exact element={<SigninForm />} />

      </Routes>
    </Fragment>
  );
}

export default App;
