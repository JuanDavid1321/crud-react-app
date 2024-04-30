import styles from "./IDTypesManagement.module.css";
import Header from "../../components/Header/Header";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import IDTypesTable from "../../components/Tables/IDTypesTable";
import CreateActionButtonAndModal from "../../components/Modals/CreateActionButtonAndModal";

const DocumentTypesManagement = () => {
    return (
        <>
            <Header />
            <div className={styles.idTypesManagementContainer}>
                <div className={styles.idTypesTableContainer}>
                    <div className={styles.idTypesTitleAndButtonContainer}>
                        <h2>Gestionar tipos de documento</h2>
                        <CreateActionButtonAndModal
                            IconForButton={<ContactPageIcon />}
                            textForButton={"Nuevo tipo de documento"}
                            ModalContent={<></>}
                        />
                    </div>
                    <IDTypesTable />
                </div>
            </div>
        </>
    );
};

export default DocumentTypesManagement;
