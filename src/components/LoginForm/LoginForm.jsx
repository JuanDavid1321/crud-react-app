import GoogleButtonSeparator from '../GoogleButtonSeparator/GoogleButtonSeparator';
import styles from './LoginForm.module.css'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginForm = ({formTitle}) => {

    const {googleSignIn, user} = UserAuth();

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
            navigate('/users');
        }        
    },[user])

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
                <GoogleButton style={{marginBottom: "30px"}} onClick={handleGoogleSignIn} />
            </div>
        </form>
    );
}
 
export default LoginForm;