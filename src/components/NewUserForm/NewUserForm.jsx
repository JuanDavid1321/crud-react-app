import styles from "./NewUserForm.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";
import GeneralInputs from "./GeneralInputs";
import {
    inputs,
    idDocumentInput,
    selectsData,
} from "../../utils/registerInputsData"; // Arrays with the props for each input element
import ImageInput from "./ImageInput";
import SelectInput from "./SelectInput";
import ImageView from "./ImageView";

const NewUserForm = ({ formTitle, setOpen }) => {
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
        role: "",
        image: "",
    });
    const [file, setFile] = useState("");
    const [perc, setPerc] = useState(null);
    const navigate = useNavigate();

    // useEffect for
    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name; //if is a file with the same name of a previous one it will be renamed with date
            console.log(name);
            const storageRef = ref(storage, file.name);

            const uploadTask = uploadBytesResumable(storageRef, file); // upload the file to storage in Firebase

            // storage Firebase progress listener
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    setPerc(progress);
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                // if everything is ok, is going to give an image URL for storage it with the other input values
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            setValues((prev) => ({
                                ...prev,
                                img: downloadURL,
                            }));
                        }
                    );
                }
            );
        };
        file && uploadFile(); // if we have a file, then call the function to start uploading it
    }, [file]);

    const handleImageChange = (selectedFile) => {
        setFile(selectedFile);
    };

    const onChange = (e) => {
        /*
         *   Spread the values, that means take all the current values
         *   and add/change only the one we are handling in this onChange function
         */
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent page refresh when submitting the form
        setOpen(false); //close modal after submiting the form
        try {
            Swal.fire({
                title: "Registrando usuario",
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            // use auth provider to create a new user with email and password
            const response = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            // upload values to Firestore
            await setDoc(doc(db, "users", response.user.uid), {
                ...values,
                timeStamp: serverTimestamp(),
            });
            Swal.fire({
                icon: "success",
                title: "Usuario registrado",
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                navigate(0);
            });
        } catch (error) {
            // show an error message if something went wrong
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
                showConfirmButton: true,
            }).then(() => {
                navigate(0);
            });
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
                        value={values[item.name]}
                        onChange={onChange}
                    />
                ))}
                {/* Pass handleSelectChange callback as a prop */}
                <SelectInput
                    label={"Tipo de documento de identidad"}
                    onChange={onChange}
                    options={selectsData[0].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[0].name}
                    value={values[selectsData[0].name]}
                />
                <GeneralInputs
                    {...idDocumentInput}
                    value={values.idDocument}
                    onChange={onChange}
                />
                <SelectInput
                    label={"Identidad de género"}
                    onChange={onChange}
                    options={selectsData[1].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[1].name}
                    value={values[selectsData[1].name]}
                />
                {/* Pass handleImageChange callback as a prop */}
                <ImageInput onImageChange={handleImageChange} />

                <SelectInput
                    label={"Rol en la organización"}
                    onChange={onChange}
                    options={selectsData[2].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[2].name}
                    value={values[selectsData[2].name]}
                />
                <ImageView file={file} />
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
