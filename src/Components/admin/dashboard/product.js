import { Fragment } from "react";
import classes from '../../../assets/styles/product.module.css'
const Product = (props) => {

    const { pName, pDescription, pPrice, pImage } = props.product;
    return (
        <Fragment>

            <section className={classes.section}>
                <img src={pImage} alt={pName} />
                <h3>{pName}</h3>
                <span>{`$${+pPrice}`}</span>
                <p>{pDescription}</p>
            </section>

        </Fragment>
    )
}
export default Product;