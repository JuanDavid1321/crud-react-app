import styles from "./LoginForm.module.css";
import { useState } from "react";
import GeneralInputs from "../NewUserForm/GeneralInputs";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import { emailInput, passwordInput } from "../../utils/loginInputsData";

const LoginForm = ({ formTitle }) => {
    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        /*
         *   Spread the values, that means take all the current values
         *   and add/change only the one we are handling in this onChange function
         */
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <div className={styles.inputsContainer}>
                <GeneralInputs
                    {...emailInput}
                    value={values.email}
                    onChange={onChange}
                />
                <GeneralInputs
                    {...passwordInput}
                    value={values.password}
                    onChange={onChange}
                />
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                    Enviar
                </button>
            </div>

            <GoogleAuth />
        </form>
    );
};

export default LoginForm;
