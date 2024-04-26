import GoogleButtonSeparator from '../GoogleButtonSeparator/GoogleButtonSeparator';
import styles from './LoginForm.module.css'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../../context/AuthContext';

const LoginForm = ({formTitle}) => {
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
                <GoogleButton style={{marginBottom: "30px"}} onClick={()=>console.log('Clicked!')} />
            </div>
        </form>
    );
}
 
export default LoginForm;