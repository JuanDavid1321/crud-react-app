import styles from "./GoogleAuth.module.css";
import { useGoogleAuth } from "../../context/GoogleAuthContext";
import GoogleButtonSeparator from "../GoogleAuth/GoogleButtonSeparator";
import GoogleButton from "react-google-button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
    const { googleSignIn, googleUser } = useGoogleAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (googleUser) {
            navigate("/");
        }
    }, [googleUser, navigate]); //googleUser and navigate state changing are dependencies of the effect hook

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
                    onClick={googleSignIn}
                />
            </div>
        </>
    );
};

export default GoogleAuth;