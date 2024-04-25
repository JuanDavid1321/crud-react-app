import { useState } from "react";
import FormInput from "./FormInput";
import styles from "./RegisterForm.module.css"
import { inputs } from "../../utils/registerInputsData"; // Array with the props for each input element

const RegisterForm = ({formTitle}) => {
    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        /* 
        *   Spread the values, that means take all the current values 
        *   and add/change only the one we are handling in this onChange function
        */
        setValues({...values, [e.target.name]: e.target.value}) 
    }
    console.log(values);
    return ( 
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <h2 className={styles.formTitle}>{formTitle}</h2>
                <div className={styles.inputsContainer}>
                    {/* Map through the array of objects to create an Input component for each item */}
                    {inputs.map(
                        item => <FormInput key={item.id} {...item} value={values[inputs.name]} onChange={onChange}/>
                    )}
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.submitButton}>Guardar</button>
                </div>
            </form>
        </div>
    );
}
export default RegisterForm;