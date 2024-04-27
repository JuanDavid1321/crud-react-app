import GoogleButtonSeparator from '../GoogleButtonSeparator/GoogleButtonSeparator';
import styles from './LoginForm.module.css'
import GoogleButton from 'react-google-button'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginForm = ({formTitle}) => {

    const {googleSignIn, user} = useAuth();

    const navigate = useNavigate();

    const handleGoogleSignIn = async() =>{
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(user != null){
            navigate('/');
        }        
    },[user]) //[user] is a condition for useEffect, this hook will execute the logic inside only when the value of user changes 

    return ( 
        <form action="" className={styles.form}>
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <div className={styles.inputsContainer}>
                
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.submitButton}>Enviar</button>
            </div>

            {/* Separator component for Google Signin button*/}
            <GoogleButtonSeparator/>
            <div className={styles.googleButtonContainer}>
                <GoogleButton 
                    style={
                            {
                                marginBottom: "30px", 
                                borderRadius:"10px", 
                                padding: "5px"
                            }
                    } 
                    // don´t forgot to define label prop for GoogleButton
                    onClick={handleGoogleSignIn}
                />
            </div>
        </form>
    );
}
 
export default LoginForm;