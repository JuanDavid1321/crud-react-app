import { useState } from "react";
import FormInput from "./FormInput";
import styles from "./RegisterForm.module.css"

const RegisterForm = () => {
    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    // Array with the props for each input element
    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder: "Username",
            label:"Username",
        }, 
        {   id:2,
            name:"email",
            type:"email",
            placeholder: "Email address",
            label:"Email",
        },
        {   id:3,
            name:"birthday",
            type:"date",
            placeholder: "Birthday",
            label:"Birthday",
        },
        {   id:4,
            name:"password",
            type:"password",
            placeholder: "Password",
            label:"Password",
        },
        {   id:5,
            name:"confirmPassword",
            type:"password",
            placeholder: "Confirm password",
            label:"Confirm password",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value}) //spread the values, that means take all the current values and add/change only
    }
    console.log(values);
    return ( 
        <div className={styles.formcontainer}>
            <form action="" className={styles.form}>
                <h2 className={styles.formtitle}>Registrar</h2>
                <div className={styles.inputscontainer}>
                    {/* Map through the array of objects to create an Input component for each item */}
                    {inputs.map(
                        item => <FormInput key={item.id} {...item} value={values[inputs.name]} onChange={onChange}/>
                    )}
                </div>
                <button className={styles.submitbutton}>Guardar</button>
            </form>
        </div>
    );
}
export default RegisterForm;