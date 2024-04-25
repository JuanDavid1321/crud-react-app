import FormInput from "./FormInput";
import styles from "./RegisterForm.module.css"

const RegisterForm = () => {
    return ( 
        <div className={styles.formcontainer}>
            <form action="" className={styles.form}>
                <FormInput placeholder="Username"/>
                <FormInput placeholder="Email"/>
                <FormInput placeholder="Full Name"/>
                <FormInput placeholder="Sth else"/>
            </form>
        </div>
    );
}
export default RegisterForm;