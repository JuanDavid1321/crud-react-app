import styles from './LoginForm.module.css'

const LoginForm = ({formTitle}) => {
    return ( 
        <form action="" className={styles.form}>
                <h2 className={styles.formTitle}>{formTitle}</h2>
                <div className={styles.inputsContainer}>
                    
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.submitButton}>Guardar</button>
                </div>
        </form>
    );
}
 
export default LoginForm;