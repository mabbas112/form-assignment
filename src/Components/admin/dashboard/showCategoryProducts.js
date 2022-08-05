import { Fragment } from "react"
import { useAppSelector } from "../../../App/hooks";
import { selectProducts } from "../../../App/reducers/productsSlice";
import Product from "./product";
import { useParams } from "react-router-dom";

const ShowCategoryProduct = () => {

    const {category} = useParams();

    const products = useAppSelector(selectProducts);
    const categoryProducts =
        products.filter((product) => product.category === category).map((product,index) =>
            <Product key={index} product={product} />
        )

    return (
        <Fragment>
            <ul style={{ display: 'flex', flexFlow: 'row wrap' }}>
                {categoryProducts}
            </ul>
        </Fragment>
    )
}
export default ShowCategoryProduct;