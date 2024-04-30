import styles from "./NewUserForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import Swal from "sweetalert2";
import GeneralInputs from "./GeneralInputs";
import {
    inputs,
    idDocumentInput,
    selectsData,
} from "../../utils/registerInputsData"; // Arrays with the props for each input element
import ImageInput from "./ImageInput";
import SelectInput from "./SelectInput";

const NewUserForm = ({ formTitle, setOpen }) => {
    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({});
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            await setDoc(doc(db, "users", res.user.uid), {
                ...values,
                timeStamp: serverTimestamp(),
            });
            setOpen(false);
            //Remember to remove navigate when onSnapShot Firebase method is implemented
            Swal.fire({
                icon: "success",
                title: "Usuario registrado",
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                navigate(0);
            });
        } catch (error) {
            setOpen(false);
            //Remember to remove navigate when onSnapShot Firebase method is implemented
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
                showConfirmButton: true,
            }).then(() => {
                navigate(0);
            });
            console.log(error);
        }
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
                    onChange={onChange}
                    options={selectsData[0].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[0].name}
                />
                {/* Pass handleImageChange callback as a prop */}
                <ImageInput onImageChange={handleImageChange} />{" "}
                <SelectInput
                    label={"Rol en la organización"}
                    onChange={onChange}
                    options={selectsData[2].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[2].name}
                />
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
