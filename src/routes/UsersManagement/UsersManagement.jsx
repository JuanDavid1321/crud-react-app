import styles from "./UsersManagement.module.css";
import Header from "../../components/Header/Header";
import NewUserModal from "../../components/Modals/UsersModals/NewUserModal";
import UsersTable from "../../components/Tables/UsersTable";

const UsersManagement = () => {
    return (
        <>
            <Header />
            <div className={styles.usersManagementContainer}>
                <div className={styles.usersTableContainer}>
                    <div className={styles.usersTitleAndButtonContainer}>
                        <h2>Gestionar usuarios</h2>
                        <NewUserModal />
                    </div>
                    <UsersTable />
                </div>
            </div>
        </>
    );
};
export default UsersManagement;
