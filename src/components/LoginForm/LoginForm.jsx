import styles from "./LoginForm.module.css";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

const LoginForm = ({ formTitle }) => {
    return (
        <form action="" className={styles.form}>
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <div className={styles.inputsContainer}></div>
            <div className={styles.buttonContainer}>
                <button className={styles.submitButton}>Enviar</button>
            </div>

            <GoogleAuth></GoogleAuth>
        </form>
    );
};

export default LoginForm;
