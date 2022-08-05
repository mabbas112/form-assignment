
export const productFormValidation = (values) => {

    const { pName, pDescription, pPrice, pImage } = values;
    const errors = {}

    if (!pName) errors.pName = "Product name is required"
    else if (pName.trim().length < 4) errors.pName = "Product name length should by > 4"

    if (!pDescription) errors.pDescription = "Product descriptioin is required"
    else if (pDescription.trim().length < 10) errors.pDescription = "Product description length should by > 10"

    if (!pPrice) errors.pPrice = "Product price is required"

    if (!pImage) errors.pImage = "Product image link is required"

    return errors;

}