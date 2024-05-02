import styles from "./RolesManagement.module.css";
import Header from "../../components/Header/Header";
import CreateActionButtonAndModal from "../../components/ActionButtons/CreateActionButtonAndModal";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Table from "../../components/Tables/Table";
import { usersColumns } from "../../utils/tableBasicColumns";
import UpdateUserForm from "../../components/Forms/UpdateUserForm/UpdateUserForm";
import NewUserForm from "../../components/Forms/NewUserForm/NewUserForm";

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
                            formTitle={"Crear nuevo rol"}
                            ModalContent={NewUserForm}
                        />
                    </div>
                    <Table
                        tableBasicColumns={usersColumns}
                        tableType={"roles"}
                        UpdateForm={UpdateUserForm}
                    />
                </div>
            </div>
        </>
    );
};

export default RolesManagement;
