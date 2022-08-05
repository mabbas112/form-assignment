export const AdminSigninFormValidation = (values) => {
    const { email, password } = values;
    const errors = {}
    if (!email) errors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid email address";

    if (!password) errors.password = "Password is required";
    else if (password.length < 2) errors.password = "Password length should >2";

    return errors;
}