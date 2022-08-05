import { Fragment, useState } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import classes from '../../../assets/styles/admin/categories/AdminDashboard.module.css'
import { useAppSelector } from "../../../App/hooks";
import { selectCategories } from "../../../App/reducers/categorySlice";
import NewProductBtn from "./products/addProductBtn";
import NewProductForm from "./products/newProductForm";
import NewCategoryForm from "./categories/newCategoryForm";
import { selectCartItem } from "../../../App/reducers/cartSlice";
import Cart from "./cart";


const AdminDashboard = () => {

    const { category } = useParams();
    const categories = useAppSelector(selectCategories);
    const cartItem = useAppSelector(selectCartItem)
    const navigate = useNavigate();
    const [toggleProductForm, setToggleProductForm] = useState(false);
    const [toggleCategoryForm, setToggleCategoryForm] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);

    const displayCategory = categories.map((category) =>
        <li key={category.id} onClick={() => {
            navigate('/admin/' + category.name)
        }}>{category.name}</li>
    )

    // const totalCartItems = cartItem.reduce((totalAmount, curObj) => (totalAmount + curObj.amount), 0)

    const toggleProductFormHandler = () => {
        setToggleProductForm(preState => !preState);
    }
    const toggleCategoryFormHandler = () => {
        setToggleCategoryForm(preState => !preState);
    }
    const toggleCartHandler = () => {
        setToggleCart(preState => !preState);
    }

    return (
        <Fragment>
            <header className={classes.header}>
                <nav>
                    <ul>
                        {displayCategory}
                        <button className={classes.button} onClick={toggleCategoryFormHandler}>Add Category</button>

                    </ul>
                </nav>
                <span onClick={toggleCartHandler}>{`Cart ${cartItem.length}`}</span>
            </header>

            {toggleCategoryForm && <NewCategoryForm toggleForm={toggleCategoryFormHandler} />}
            {category && <NewProductBtn onClick={toggleProductFormHandler} />}
            {toggleProductForm && <NewProductForm toggleForm={toggleProductFormHandler} />}

            <Outlet />

            {toggleCart && <Cart />}

        </Fragment>
    )
}
export default AdminDashboard;