import { Fragment } from "react";
import { useFormik } from "formik";
import InputField from "../../auth/InputField";
import { productFormValidation } from "./productFormValidation";

const NewProductForm = (props) => {

    const defaultProductDetail = {
        pName: '',
        pDescription: '',
        pPrice: '',
        pImage: ''
    }

    const formik = useFormik({
        initialValues: defaultProductDetail,
        validate: productFormValidation,
        onSubmit: (values)=>{
            props.addProduct(values);
            formik.resetForm()
        }
    });


    return (
        <Fragment>

            <form onSubmit={formik.handleSubmit}>
                <InputField
                    label="Enter product name"
                    inputName="pName"
                    inputType="text"
                    onChange={formik.handleChange}
                    value={formik.values.pName}
                />
                {formik.errors.pName ? <div>{formik.errors.pName}</div> : null}
                <InputField
                    label="Enter product description"
                    inputName="pDescription"
                    inputType="text"
                    onChange={formik.handleChange}
                    value={formik.values.pDescription}
                />
                {formik.errors.pDescription ? <div>{formik.errors.pDescription}</div> : null}
                <InputField
                    label="Enter product price"
                    inputName="pPrice"
                    inputType="number"
                    onChange={formik.handleChange}
                    value={formik.values.pPrice}
                />
                {formik.errors.pPrice ? <div>{formik.errors.pPrice}</div> : null}
                <InputField
                    label="Enter product image link"
                    inputName="pImage"
                    inputType="text"
                    onChange={formik.handleChange}
                    value={formik.values.pImage}
                />
                {formik.errors.pImage ? <div>{formik.errors.pImage}</div> : null}
                <button type="submit">Add product</button>
            </form>
        </Fragment>
    )
}
export default NewProductForm;