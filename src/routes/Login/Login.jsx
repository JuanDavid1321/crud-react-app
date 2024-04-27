import { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Login.module.css";

const Login = () => {
    // Manage login and register forms view with states
    const [whichView, setWhichView] = useState(false);

    const handleButtonsClick = () => {
        setWhichView((prev) => !prev);
    };

    return (
        <div className={styles.login}>
            <div className={styles.formContainer}>
                <div className={styles.buttonsSection}>
                    <button
                        className={`
                                ${
                                    whichView
                                        ? styles.loginFormViewButton
                                        : styles.activeLoginFormViewButton
                                }
                            `}
                        onClick={handleButtonsClick}
                    >
                        Iniciar sesión
                    </button>
                    <button
                        className={`
                                ${
                                    whichView
                                        ? styles.activeRegisterFormViewButton
                                        : styles.registerFormViewButton
                                }
                            `}
                        onClick={handleButtonsClick}
                    >
                        Registrarse
                    </button>
                </div>

                {/* Which form to show */}
                {whichView ? (
                    <RegisterForm formTitle={"Registrarse"} />
                ) : (
                    <LoginForm formTitle={"Ingresar"} />
                )}
            </div>
        </div>
    );
};
export default Login;
