import { useState } from "react";
import FormInput from "./FormInput";
import styles from "./RegisterForm.module.css";
import { inputs } from "../../utils/registerInputsData"; // Array with the props for each input element
import ImageInput from "./ImageInput";
import GoogleButtonSeparator from "../GoogleButtonSeparator/GoogleButtonSeparator";
import GoogleButton from "react-google-button";

const RegisterForm = ({ formTitle }) => {
    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        password: "",
        phoneNumber: "",
        role: "Visitante", //by default the user is a visitor
        image: null, //by default there's no selected file
    });

    const handleImageChange = (selectedFile) => {
        setValues({ ...values, image: selectedFile });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        /*
         *   Spread the values, that means take all the current values
         *   and add/change only the one we are handling in this onChange function
         */
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);
    return (
        <form action="" className={styles.form}>
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <div className={styles.inputsContainer}>
                {/* Map through the array of objects to create an Input component for each item */}
                {inputs.map((item) => (
                    <FormInput
                        key={item.id}
                        {...item}
                        value={values[inputs.name]}
                        onChange={onChange}
                    />
                ))}
                <ImageInput onImageChange={handleImageChange} />{" "}
                {/* Pass handleImageChange prop */}
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.submitButton}>Enviar</button>
            </div>

            {/* Separator component for Google Signin button*/}
            <GoogleButtonSeparator />
            <div className={styles.googleButtonContainer}>
                <GoogleButton
                    style={{ marginBottom: "30px" }}
                    onClick={() => console.log("Clicked!")}
                />
            </div>
        </form>
    );
};
export default RegisterForm;
