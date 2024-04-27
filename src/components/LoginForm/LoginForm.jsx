import GoogleButtonSeparator from "../GoogleButtonSeparator/GoogleButtonSeparator";
import styles from "./LoginForm.module.css";
import GoogleButton from "react-google-button";
import { useGoogleAuth } from "../../context/GoogleAuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = ({ formTitle }) => {
    const { googleSignIn, user } = useGoogleAuth();

    useEffect(() => {
        if (user.isLoggedInWithGoogle) {
            navigate("/");
        }
    }, [user.isLoggedInWithGoogle]); //[user] is a condition for useEffect, this hook will execute the logic inside only when the value of user changes

    const navigate = useNavigate();

    return (
        <form action="" className={styles.form}>
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <div className={styles.inputsContainer}></div>
            <div className={styles.buttonContainer}>
                <button className={styles.submitButton}>Enviar</button>
            </div>

            {/* Separator component for Google Signin button*/}
            <GoogleButtonSeparator />
            <div className={styles.googleButtonContainer}>
                <GoogleButton
                    style={{
                        marginBottom: "30px",
                        borderRadius: "10px",
                        padding: "5px",
                    }}
                    // don´t forget to define label prop for GoogleButton
                    onClick={googleSignIn}
                />
            </div>
        </form>
    );
};

export default LoginForm;
