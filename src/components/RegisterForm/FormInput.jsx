import styles from "./FormInput.module.css"

const FormInput = (props) => { //props used for a lot of props from the father
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    return ( 
        <div className={styles.formInput}>
            <label className={styles.labelGeneric}>{label}</label>
            <input required className={styles.inputGeneric} {...inputProps} onChange={onChange}/>
            <span className={styles.errorMessageGeneric}>Campo obligatorio!</span>
            <span className={styles.errorMessageGeneric}>{errorMessage}</span>
        </div>
    );
}
 
export default FormInput;