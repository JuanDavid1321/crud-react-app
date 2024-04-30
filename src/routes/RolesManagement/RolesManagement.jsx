import styles from "./RolesManagement.module.css";
import Header from "../../components/Header/Header";
import CreateActionButtonAndModal from "../../components/ActionButtons/CreateActionButtonAndModal";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import RolesTable from "../../components/Tables/RolesTable";

const RolesManagement = () => {
    return (
        <>
            <Header />
            <div className={styles.rolesManagementContainer}>
                <div className={styles.rolesTableContainer}>
                    <div className={styles.rolesTitleAndButtonContainer}>
                        <h2>Gestionar roles</h2>
                        <CreateActionButtonAndModal
                            IconForButton={<AdminPanelSettingsIcon />}
                            textForButton={"Nuevo rol"}
                            ModalContent={<></>}
                        />
                    </div>
                    <RolesTable />
                </div>
            </div>
        </>
    );
};

export default RolesManagement;
