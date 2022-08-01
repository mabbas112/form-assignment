import { Fragment } from "react";
const InputField = (props, ref) => {
    const { label, inputType, inputName, onChange, value } = props;
    return (
        <Fragment>
            <div className="mb-4">
                <label
                    htmlFor={inputName}
                    className="block text-sm font-medium text-gray-700 text-left"
                >
                    {label}
                </label>
                <div className="mt-1">
                    <input
                        onChange={onChange}
                        value={value}
                        type={inputType}
                        name={inputName}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder=""
                    />
                </div>
            </div>
        </Fragment>
    );
};
export default InputField;
