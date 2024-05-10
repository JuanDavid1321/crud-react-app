import styles from "./LoginForm.module.css";
import { useState } from "react";
import GeneralInputs from "../NewUserForm/GeneralInputs";
import GoogleAuth from "../../GoogleAuth/GoogleAuth";
import { emailInput, passwordInput } from "../../../utils/loginInputsData";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

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

    const handleLoginWithEmailAndPassword = async (e) => {
        e.preventDefault();
        try {
            Swal.fire({
                title: "Iniciando sesión con correo y contraseña",
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            const userSnapshot = await getDocs(collection(db, "users"));
            userSnapshot.forEach((doc) => {
                const userData = doc.data();
                if (
                    userData.email === values.email &&
                    userData.password === values.password
                ) {
                    // Inicio de sesión exitoso, redirigir a la página deseada
                    Swal.fire({
                        icon: "success",
                        title: "Datos correctos",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Datos incorrectos",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleLoginWithEmailAndPassword}
        >
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
