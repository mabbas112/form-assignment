import { Fragment } from "react"
import InputField from "../../../auth/InputField";
import { useFormik } from "formik";
import { AdminSigninFormValidation } from "./signinFormValidation";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { AdminSigninAction } from "../../../../app/reducers/admin/authSlice";
import { selectIsAuthenticated } from "../../../../app/reducers/admin/authSlice";
import { Navigate } from "react-router-dom";


const AdminSigninForm = () => {

    const dispatch = useAppDispatch();
    const adminAuthenticated = useAppSelector(selectIsAuthenticated);
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

    if (adminAuthenticated) {
        return (
            <Navigate to='/admin' />
        )
    }

    return (
        <Fragment>
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
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {(formik.errors.email && formik.touched.email) ? <div>{formik.errors.email}</div> : null}
                            <InputField
                                label="Password"
                                inputName="password"
                                inputType="text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {(formik.errors.password && formik.touched.password) ? (
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

        </Fragment>
    )
}
export default AdminSigninForm;