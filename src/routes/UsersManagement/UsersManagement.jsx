import styles from "./UsersManagement.module.css";
import Header from "../../components/Header/Header";
import NewUserForm from "../../components/NewUserForm/NewUserForm";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import CreateActionButtonAndModal from "../../components/Modals/CreateActionButtonAndModal";
import UsersTable from "../../components/Tables/UsersTable";

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
                            ModalContent={
                                <NewUserForm
                                    formTitle={"Crear nuevo usuario"}
                                />
                            }
                        />
                    </div>
                    <UsersTable />
                </div>
            </div>
        </>
    );
};
export default UsersManagement;
