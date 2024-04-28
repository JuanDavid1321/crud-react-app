import styles from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.formContainer}>
                <LoginForm formTitle={"Ingresar"} />
            </div>
        </div>
    );
};
export default Login;
