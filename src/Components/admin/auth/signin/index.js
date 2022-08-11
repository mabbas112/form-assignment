import { Fragment } from "react"
import InputField from "../../../auth/InputField";
import { useFormik } from "formik";
import { AdminSigninFormValidation } from "./signinFormValidation";
import { useAppDispatch, useAppSelector } from "../../../../App/hooks";
import { AdminSigninAction } from "../../../../App/reducers/admin/authSlice";
import { selectIsAuthenticated } from "../../../../App/reducers/admin/authSlice";
import Dashboard from "../../dashboard";


const AdminSigninForm = () => {

    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const defaultState = {
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: defaultState,
        validate: AdminSigninFormValidation,
        onSubmit: (values) => {
            dispatch(AdminSigninAction(values));
            formik.resetForm();
        }
    });

    return (
        <Fragment>
            {!isAuthenticated &&
                <form onSubmit={formik.handleSubmit}>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                <h3 className="text-lg leading-6 font-bold text-gray-900">
                                    Admin
                                </h3>
                            </div>
                            <div className="mb-4">
                                <InputField
                                    label="Email"
                                    inputName="email"
                                    inputType="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                                <InputField
                                    label="Password"
                                    inputName="password"
                                    inputType="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null}

                                <button
                                    type="submit"
                                    className="w-full mt-8 ml-3 ml-auto mr-auto block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            }
            {
                isAuthenticated && <Dashboard />

            }

        </Fragment>
    )
}
export default AdminSigninForm;