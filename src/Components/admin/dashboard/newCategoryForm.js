import InputField from "../../auth/InputField";
import { useFormik } from "formik";

const NewCategoryForm = (props) => {

    const validateCategory = (values) => {
        const { name } = values;
        const errors = {}
        if (!name) errors.name = "Category name is required";
        else if (name.trim().length < 4) errors.name = "Category name should > 4";
        return errors;
    }
    const defaultValues = {
        name: ''
    }

    const formik = useFormik({
        initialValues: defaultValues,
        validate: validateCategory,
        onSubmit: (values) => {
            props.addCategory(values);
            formik.resetForm();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <InputField
                label="Enter Category name"
                inputName="name"
                inputType="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            <button type="submit">Add</button>
        </form>
    )
}
export default NewCategoryForm;