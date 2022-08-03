import { Fragment, useEffect } from "react";
import SignupForm from "./Components/auth/signup";
// import Header from "./Components/header";
import { useAppDispatch, useAppSelector } from "./App/hooks";
import { setUsersAction } from "./App/reducers/usersSlice";
import { Route, Routes } from "react-router-dom";
import SigninForm from "./Components/auth/signin";
import { selectIsUserAuthenticated, SignoutAction } from "./App/reducers/authSlice";
import AdminSigninForm from "./Components/admin/auth/signin";
import HomeAppliancesCategory from "./Components/admin/dashboard/categories/homeAppliances";
import ShoesCategory from "./Components/admin/dashboard/categories/shoes";
import SportsCategory from "./Components/admin/dashboard/categories/sports";
import { getProductAction } from "./App/reducers/productsSlice";


function App() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsUserAuthenticated);

  useEffect(() => {
    dispatch(setUsersAction());
  }, [dispatch]);

  const signoutHandler = () => {
    dispatch(SignoutAction())
  }

  useEffect(()=>{
    dispatch(getProductAction());
  },[dispatch])

  return (
    <Fragment>
      {/* <Header /> */}

      {isAuthenticated && <button onClick={signoutHandler}>Sign out</button>}
      <Routes>
        <Route path="/admin/*" element={<AdminSigninForm />}>
          <Route path="homeappliances" element={<HomeAppliancesCategory />} />
          <Route path="shoes" element={<ShoesCategory />} />
          <Route path="sports" element={<SportsCategory />} />
        </Route>

        <Route path="/signup" exact element={<SignupForm />} />
        <Route path="/signin" exact element={<SigninForm />} />

      </Routes>
    </Fragment>
  );
}

export default App;
