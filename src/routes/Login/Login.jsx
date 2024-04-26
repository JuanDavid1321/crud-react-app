import { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Login.module.css"

const Login = () => {

    // Manage login and register forms with states
    const [loginButtonClicked, setLoginButtonClicked] = useState(true);
    const [registerButtonClicked, setRegisterButtonClicked] = useState(false);
    const handleLoginButtonClicked = () => {
        setLoginButtonClicked(true);
        setRegisterButtonClicked(false);
    };
    const handleRegisterButtonClicked = () => {
        setRegisterButtonClicked(true);
        setLoginButtonClicked(false)
    };
    console.log(loginButtonClicked);
    console.log(registerButtonClicked);

    return (
        <div className={styles.login}>
            <div className={styles.formContainer}>
                <div className={styles.buttonsSection}>
                    <button 
                        className={
                            `
                                ${styles.loginFormViewButton} 
                                ${loginButtonClicked?styles.activeLoginFormViewButton:""}
                            `
                        }
                        onClick={handleLoginButtonClicked}
                    >
                        Iniciar sesión
                    </button>
                    <button
                        className={
                            `
                                ${styles.registerFormViewButton} 
                                ${registerButtonClicked?styles.activeRegisterFormViewButton:""}
                            `
                        }
                        onClick={handleRegisterButtonClicked}
                    >
                        Registrarse
                    </button>
                </div>
                <RegisterForm formTitle={"Registrarse"}/>
                <LoginForm></LoginForm>
            </div> 
        </div>
    );
}
export default Login;