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
                {name === "idDocumentType" ? (
                    <>
                        <option value="C.C.">C.C.</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </>
                ) : name === "role" ? (
                    <>
                        <option value="Usuario">Usuario</option>
                        <option value="Moderador">Moderador</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </>
                ) : (
                    options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))
                )}
            </select>
        </div>
    );
};

export default SelectInput;
