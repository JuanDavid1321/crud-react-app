import styles from "./UsersManagement.module.css";
import Header from "../../components/Header/Header";
import NewUserForm from "../../components/NewUserForm/NewUserForm";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import CreateActionModal from "../../components/Modals/CreateActionModal";
import UsersTable from "../../components/Tables/UsersTable";

const UsersManagement = () => {
    return (
        <>
            <Header />
            <div className={styles.usersManagementContainer}>
                <div className={styles.usersTableContainer}>
                    <div className={styles.usersTitleAndButtonContainer}>
                        <h2>Gestionar usuarios</h2>
                        <CreateActionModal
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
