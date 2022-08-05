import { Fragment, useState } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import classes from '../../../assets/styles/admin/categories/AdminDashboard.module.css'
import NewProductBtn from "./addProductBtn";
import NewProductForm from "./newProductForm";
import { addProductAction } from "../../../App/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { selectCategories, setAddCategoryAction } from "../../../App/reducers/categorySlice";
import NewCategoryForm from "./newCategoryForm";

const AdminDashboard = () => {

    const { category } = useParams();
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectCategories);
    const navigate = useNavigate();
    const [toggleProductForm, setToggleProductForm] = useState(false);
    const [toggleCategoryForm, setToggleCategoryForm] = useState(false);





    const addProduct = (product) => {
        dispatch(addProductAction({ ...product, category: category }));
        setToggleProductForm(preState => !preState);
    }
    const addCategory = (category) => {
        dispatch(setAddCategoryAction(category));
        setToggleCategoryForm(preState => !preState);
    }



    const displayCategory = categories.map((category) =>
        <li key={category.id} onClick={() => {
            navigate('/admin/' + category.name)
        }}>{category.name}</li>
    )
    

    const toggleProductFormHandler = () => {
        setToggleProductForm(preState => !preState);
    }
    const toggleCategoryFormHandler = () => {
        setToggleCategoryForm(preState => !preState);
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
            </header>
            {toggleCategoryForm && <NewCategoryForm addCategory={addCategory} />}
            {category && <NewProductBtn onClick={toggleProductFormHandler} />}
            {toggleProductForm && <NewProductForm addProduct={addProduct} />}
            <Outlet />
        </Fragment>
    )
}
export default AdminDashboard;