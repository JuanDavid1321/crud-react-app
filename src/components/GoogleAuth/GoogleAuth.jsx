import styles from "./GoogleAuth.module.css";
import { useGoogleAuth } from "../../context/GoogleAuthContext";
import GoogleButtonSeparator from "../GoogleAuth/GoogleButtonSeparator";
import GoogleButton from "react-google-button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
    const { googleSignIn, googleUser } = useGoogleAuth();

    useEffect(() => {
        if (googleUser) {
            navigate("/");
        }
    }, [googleUser]); //[user] is a condition for useEffect, this hook will execute the logic inside only when the value of user changes

    const navigate = useNavigate();

    return (
        <>
            {/* Separator component for Google Signin button*/}
            <GoogleButtonSeparator />

            <div className={styles.googleButtonContainer}>
                <GoogleButton
                    label="Ingresar con Google"
                    style={{
                        marginBottom: "30px",
                        borderRadius: "10px",
                        padding: "5px",
                    }}
                    // don´t forget to define label prop for GoogleButton
                    onClick={googleSignIn}
                />
            </div>
        </>
    );
};

export default GoogleAuth;
