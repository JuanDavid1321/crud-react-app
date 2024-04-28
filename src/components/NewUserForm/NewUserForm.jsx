import styles from "./NewUserForm.module.css";
import { useState } from "react";
import GeneralInputs from "./GeneralInputs";
import {
    inputs,
    idDocumentInput,
    selectsData,
} from "../../utils/registerInputsData"; // Arrays with the props for each input element
import ImageInput from "./ImageInput";
import SelectInput from "./SelectInput";

const NewUserForm = ({ formTitle }) => {
    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        password: "",
        phoneNumber: "",
        idDocumentType: "",
        idDocument: "",
        genderIdentity: "",
        role: "Visitante", //by default the user is a visitor
        image: "", //by default there's no selected file
    });

    const handleImageChange = (selectedFile) => {
        setValues({ ...values, image: selectedFile });
    };

    const onChange = (e) => {
        /*
         *   Spread the values, that means take all the current values
         *   and add/change only the one we are handling in this onChange function
         */
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    console.log(values);

    return (
        <form onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <div className={styles.inputsContainer}>
                {/* Map through the array of objects to create an Input component for each item */}
                {inputs.map((item) => (
                    <GeneralInputs
                        key={item.id}
                        {...item}
                        value={values[inputs.name]}
                        onChange={onChange}
                    />
                ))}
                {/* Pass handleSelectChange callback as a prop */}
                <SelectInput
                    label={"Tipo de documento de identidad"}
                    errorMessage={"¡Por favor, debe seleccionar una opción!"}
                    onChange={onChange}
                    options={selectsData[1].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[1].name}
                />
                <GeneralInputs
                    {...idDocumentInput}
                    value={values.idDocument}
                    onChange={onChange}
                />
                <SelectInput
                    label={"Identidad de género"}
                    errorMessage={"¡Por favor, debe seleccionar una opción!"}
                    onChange={onChange}
                    options={selectsData[0].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[0].name}
                />
                {/* Pass handleImageChange callback as a prop */}
                <ImageInput onImageChange={handleImageChange} />{" "}
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                    Enviar
                </button>
            </div>
        </form>
    );
};
export default NewUserForm;
