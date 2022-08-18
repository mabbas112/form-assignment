import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { AdminSignoutAction } from "../../../app/reducers/admin/authSlice";
import { selectIsAuthenticated } from "../../../app/reducers/admin/authSlice";
import { useAppSelector } from "../../../app/hooks";

const btnStyle = {
    padding: 10, border: "1px solid black", margin: 20, borderRadius: 15
}

const Dashboard = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const adminAuthenticated = useAppSelector(selectIsAuthenticated);

    const navigationHandler = (url) => {
        navigate(url)
    }
    return (

        <Fragment>
            {adminAuthenticated ?
                <div>
                    <button
                        style={btnStyle}
                        onClick={() => dispatch(AdminSignoutAction())}
                    >
                        Sign Out
                    </button>

                    <button
                        style={btnStyle}
                        onClick={() => navigationHandler('/admin/categories')}
                    >
                        Categories
                    </button>

                    <button
                        style={btnStyle}
                        onClick={() => navigationHandler('/admin/products')}
                    >
                        Products
                    </button>

                    <button
                        style={btnStyle}
                        onClick={() => navigationHandler('/admin/orders')}
                    >
                        Orders
                    </button>

                     <Outlet />
                </div>

                : <button
                    style={btnStyle}
                    onClick={() => navigationHandler('/admin/signin')}
                >
                    Error: Admin Sign in ?
                </button>
            }
        </Fragment>
    )
}
export default Dashboard;