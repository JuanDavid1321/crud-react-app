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
        setLoginButtonClicked(false);
    };

    return (
        <div className={styles.login}>
            <div className={styles.formContainer}>
                <div className={styles.buttonsSection}>
                    <button 
                        className={
                            `
                                ${loginButtonClicked ? styles.activeLoginFormViewButton:styles.loginFormViewButton}
                            `
                        }
                        onClick={handleLoginButtonClicked}
                    >
                        Iniciar sesión
                    </button>
                    <button
                        className={
                            `
                                ${registerButtonClicked ? styles.activeRegisterFormViewButton:styles.registerFormViewButton}
                            `
                        }
                        onClick={handleRegisterButtonClicked}
                    >
                        Registrarse
                    </button>
                </div>

                {/* Which form to show */}
                {registerButtonClicked?(
                        <RegisterForm formTitle={"Registrarse"} />
                    ):(
                        <LoginForm formTitle={"Ingresar"} />
                    )
                }
            </div> 
        </div>
    );
}
export default Login;