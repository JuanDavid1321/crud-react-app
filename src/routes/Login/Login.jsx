import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.formContainer}>
                <div className={styles.buttonsSection}>
                    <button 
                        className={`${styles.loginFormViewButton} ${styles.activeLoginFormViewButton}`}
                    >
                        Iniciar sesión
                    </button>
                    <button
                        className={`${styles.registerFormViewButton} ${styles.activeRegisterFormViewButton}`}
                    >
                        Registrarse
                    </button>
                </div>
                <RegisterForm formTitle={"Registrarse"}/>
            </div> 
        </div>
    );
}
export default Login;