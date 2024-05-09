import { useEffect, useState } from "react";
import styles from "./SelectInput.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const SelectInput = (props) => {
    const [rolesOptions, setRolesOptions] = useState([]);
    const [idDocumentsOptions, setIdDocumentsOptions] = useState([]);

    // The users management route is the only one that needs to fetch roles and idDocumentTypes options for new users
    useEffect(() => {
        const fetchSelectOptions = async () => {
            let rolesList = [];
            let idDocumentsList = [];
            try {
                // fetch roles options
                const rolesQuerySnapshot = await getDocs(
                    collection(db, "roles")
                );
                rolesQuerySnapshot.forEach((doc) => {
                    rolesList.push({ id: doc.id, ...doc.data() });
                });
                setRolesOptions(rolesList);

                // fetch idDocumentTypes options
                const idDocumentsQuerySnapshot = await getDocs(
                    collection(db, "idDocuments")
                );
                idDocumentsQuerySnapshot.forEach((doc) => {
                    idDocumentsList.push({ id: doc.id, ...doc.data() });
                });
                setIdDocumentsOptions(idDocumentsList);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSelectOptions();
    }, []);
    console.log(rolesOptions);
    console.log(idDocumentsOptions);

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
