import styles from "./UsersManagement.module.css";
import Header from "../../components/Header/Header";
import NewUserForm from "../../components/NewUserForm/NewUserForm";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import CreateActionButtonAndModal from "../../components/Modals/CreateActionButtonAndModal";
import Table from "../../components/Table/Table";
import UsersActionButtons from "../../components/ActionButtons/UsersActionButtons/UsersActionButtons";

const UsersManagement = () => {
    return (
        <>
            <Header />
            <div className={styles.usersManagementContainer}>
                <div className={styles.usersTableContainer}>
                    <div className={styles.usersTitleAndButtonContainer}>
                        <h2>Gestionar usuarios</h2>
                        <CreateActionButtonAndModal
                            IconForButton={<PersonAddRoundedIcon />}
                            textForButton={"Nuevo usuario"}
                            ModalContent={
                                <NewUserForm
                                    formTitle={"Crear nuevo usuario"}
                                />
                            }
                        />
                    </div>
                    <Table ActionButtons={<UsersActionButtons />} />
                </div>
            </div>
        </>
    );
};
export default UsersManagement;
