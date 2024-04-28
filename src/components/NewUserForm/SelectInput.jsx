import styles from "./SelectInput.module.css";

const SelectInput = (props) => {
    const { label, errorMessage, onChange, options, name } = props; //Destructuring assignment
    return (
        <div className={styles.selectContainer}>
            <label className={styles.labelGeneric}>{label}</label>
            <select
                className={styles.select}
                required
                onChange={onChange}
                name={name}
            >
                {/* Default option */}
                <option hidden value="">
                    Seleccione una opción
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span className={styles.particularErrorMessage}>
                {errorMessage}
            </span>
        </div>
    );
};

export default SelectInput;
