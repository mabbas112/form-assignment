import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../App/hooks";
import { setSignOut } from "../../../App/reducers/admin/authSlice";

const btnStyle = {
    padding: 10, border: "1px solid black", margin: 20, borderRadius: 15
}
const Dashboard = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <Fragment>
            <button
                style={btnStyle}
                onClick={()=> dispatch(setSignOut())}
            >
                Sign Out
            </button>

            <button
                style={btnStyle}
                onClick={() => navigate('/admin/newcategory')}
            >
                Add Category
            </button>

            <button
                style={btnStyle}
                onClick={() => navigate('/admin/categories')}
            >
                Show Categories
            </button>

            <button
                style={btnStyle}
                onClick={() => navigate('/admin/products')}
            >
                Show Products
            </button>

            <button
                style={btnStyle}
                onClick={() => navigate('/admin/newproduct')}
            >
                Add Products
            </button>
            <button
                style={btnStyle}
                onClick={() => navigate('/admin/orders')}
            >
                Orders
            </button>
            <Outlet />
        </Fragment>
    )
}
export default Dashboard;