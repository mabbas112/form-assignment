import { Fragment } from "react";
import { useRef } from "react";
import { users } from "../../../App/reducers/usersSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InputField from "../InputField";

const SigninForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const allUsers = useSelector(users);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value.trim();
    const enteredPassword = passwordInputRef.current.value.trim();

    if (!enteredEmail.includes("@") || enteredPassword.length < 1) return;

    const isAccountExist = allUsers.find(
      (user) => user.email === enteredEmail && user.password === enteredPassword
    );

    if (isAccountExist) {
      console.log("signin");
    } else {
      console.log("Account does not exist");
    }

    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h3 className="text-lg leading-6 font-bold text-gray-900">
                Sign In
              </h3>
            </div>
            <div className="mb-4">

              <InputField 
                label="Email" 
                inputName="email" 
                inputType="email" 
              />
              <InputField
                label="Password"
                inputName="password"
                inputType="password"
              />

              <Link to="/signup">
                <div className="text-sm">
                  <div className="font-medium text-blue-700 hover:text-blue-600 hover:underline cursor-pointer">
                    Does not have Account?
                  </div>
                </div>
              </Link>
              <button
                type="submit"
                className="w-full mt-8 ml-3 ml-auto mr-auto block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default SigninForm;
