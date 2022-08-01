import { Fragment, useEffect } from "react";
import SignupForm from "./Components/auth/signup";
// import Header from "./Components/header";
import { useAppDispatch } from "./App/hooks";
import { getUsersAction } from "./App/reducers/usersSlice";
import { Route, Switch } from "react-router-dom";
import SigninForm from "./Components/auth/signin";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <Fragment>
      {/* <Header /> */}

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
