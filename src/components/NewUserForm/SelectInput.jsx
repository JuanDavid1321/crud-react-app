import styles from "./SelectInput.module.css";

const SelectInput = (props) => {
    const { label, onChange, options, name, value } = props; //Destructuring assignment
    return (
        <div className={styles.selectContainer}>
            <label className={styles.labelGeneric}>{label}</label>
            <select
                className={styles.select}
                required
                onChange={onChange}
                name={name}
                value={value}
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
        </div>
    );
};

export default SelectInput;
