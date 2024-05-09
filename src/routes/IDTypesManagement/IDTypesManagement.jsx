import styles from "./IDTypesManagement.module.css";
import HeaderForGoogleUsers from "../../components/Header/HeaderForGoogleUsers";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CreateActionButtonAndModal from "../../components/ActionButtons/CreateActionButtonAndModal";
import Table from "../../components/Tables/Table";
import { usersColumns } from "../../utils/tableBasicColumns";
import UpdateUserForm from "../../components/Forms/UpdateUserForm/UpdateUserForm";
import NewUserForm from "../../components/Forms/NewUserForm/NewUserForm";

const DocumentTypesManagement = () => {
    return (
        <>
            <HeaderForGoogleUsers />
            <div className={styles.idTypesManagementContainer}>
                <div className={styles.idTypesTableContainer}>
                    <div className={styles.idTypesTitleAndButtonContainer}>
                        <h2>Gestionar tipos de documento</h2>
                        <CreateActionButtonAndModal
                            IconForButton={<ContactPageIcon />}
                            textForButton={"Nuevo tipo de documento"}
                            formTitle={"Crear nuevo tipo de documento"}
                            ModalContent={NewUserForm}
                        />
                    </div>
                    <Table
                        tableBasicColumns={usersColumns}
                        tableType={"idDocuments"}
                        UpdateForm={UpdateUserForm}
                        updateFormTitle={"Editar tipo de documento"}
                    />
                </div>
            </div>
        </>
    );
};

export default DocumentTypesManagement;
