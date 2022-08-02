import { Fragment } from "react";
import { Link } from "react-router-dom";
import InputField from "../InputField";
import { useFormik } from "formik";
import { signinFormSchema, signinFormValidation } from "./signinFormValidation";
import { SigninAction } from "../../../App/reducers/authSlice";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { selectIsUserAuthenticated } from "../../../App/reducers/authSlice";


const SigninForm = () => {

  

  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsUserAuthenticated);

  const formik = useFormik({
    initialValues: signinFormSchema,
    validate: signinFormValidation,
    onSubmit: (values) => {
      dispatch(SigninAction(values));
      formik.resetForm();
    }
  });


  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h3 className="text-lg leading-6 font-bold text-gray-900">
                Sign In
              </h3>
            </div>
            <div className="mb-4">
              <InputField
                label="Email"
                inputName="email"
                inputType="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}

              <InputField
                label="Password"
                inputName="password"
                inputType="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}

              <Link to="/signup">
                <div className="text-sm">
                  <div className="font-medium text-blue-700 hover:text-blue-600 hover:underline cursor-pointer">
                    Does not have Account?
                  </div>
                </div>
              </Link>
              <button
                type="submit"
                className="w-full mt-8 ml-3 ml-auto mr-auto block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
              {isAuthenticated && <p>User is Authenticated</p>}
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default SigninForm;
