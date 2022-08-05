export const signupFormValidation = (values) => {
    const { firstName, email, password } = values;
    const errors = {};

    if (!firstName) errors.firstName = "FirstName is required!";
    else if (firstName.length < 3)
        errors.firstName = "FirstName length should >3";

    if (!email) errors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid email address";

    if (!password) errors.password = "Password is required";
    else if (password.length < 2) errors.password = "Password length should >2";

    return errors;
};

export const signupFormSchema = {
    firstName: "",
    email: "",
    password: "",
};
