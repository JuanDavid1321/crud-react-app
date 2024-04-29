import styles from "./RolesManagement.module.css";
import Header from "../../components/Header/Header";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CreateActionButtonAndModal from "../../components/Modals/CreateActionButtonAndModal";
import Table from "../../components/Table/Table";

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
                    <Table ActionButtons={<></>} />
                </div>
            </div>
        </>
    );
};

export default RolesManagement;
