import GoogleButtonSeparator from '../GoogleButtonSeparator/GoogleButtonSeparator';
import styles from './LoginForm.module.css'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../../context/AuthContext';

const LoginForm = ({formTitle}) => {

    const handleGoogleSignIn = async() =>{
        const {googleSignIn} = UserAuth;
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

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