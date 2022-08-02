import { Fragment } from "react";
import { useSelector } from "react-redux";
import { SignupAction, isUserLoading } from "../../../App/reducers/authSlice";
import { useAppDispatch } from "../../../App/hooks";
import { Link } from "react-router-dom";
import InputField from "../InputField";
import { useFormik } from "formik";

import { signupFormSchema, signupFormValidation } from "./signupFormValidation";

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(isUserLoading);

  const isLoadingMessage = isLoading && (
    <p style={{ color: "black" }}>Successfully created your acconut</p>
  );
  const formik = useFormik({
    initialValues: signupFormSchema,
    validate: signupFormValidation,
    onSubmit: (values) => {
      dispatch(SignupAction(values))
      formik.resetForm();
    },
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <div className="space-y-6 sm:space-y-5">
            <div className="min-h-screen flex flex-col justify-center pb-12 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h3 className="text-lg leading-6 font-bold text-gray-900">
                  Sign Up
                </h3>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

                  <InputField
                    label="First Name"
                    inputName="firstName"
                    inputType="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />

                  {formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}

                  <InputField
                    label="Email"
                    inputName="email"
                    inputType="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />

                  {formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}

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

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <div className="font-medium text-blue-700 hover:text-blue-600 hover:underline cursor-pointer">
                        Forgot your password?
                      </div>
                      <Link to="signin">
                        <div className="font-medium text-blue-700 hover:text-blue-600 hover:underline cursor-pointer">
                          Already Account?
                        </div>
                      </Link>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-8 ml-3 ml-auto mr-auto block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign up
                  </button>
                  {isLoadingMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default SignupForm;
