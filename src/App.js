import { Fragment, useEffect } from "react";
import SignupForm from "./Components/auth/signup";
// import Header from "./Components/header";
import { useAppDispatch } from "./App/hooks";
import { setUsersAction } from "./App/reducers/usersSlice";
import { Route, Switch } from "react-router-dom";
import SigninForm from "./Components/auth/signin";
import { useSelector } from "react-redux";
import { isUserAuthenticated, SignoutAction } from "./App/reducers/authSlice";
function App() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(isUserAuthenticated);

  useEffect(() => {
    dispatch(setUsersAction());
  }, [dispatch]);

  const signoutHandler = () => {
    dispatch(SignoutAction())
  }

  return (
    <Fragment>
      {/* <Header /> */}
      {isAuthenticated && <button onClick={signoutHandler}>Sign out</button>}
      <Switch>

        <Route path="/signup" exact>
          <SignupForm />
        </Route>

        <Route path="/signin" exact>
          <SigninForm />
        </Route>

      </Switch>
    </Fragment>
  );
}

export default App;
