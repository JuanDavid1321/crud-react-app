import styles from "./UsersManagement.module.css";
import Header from "../../components/Header/Header";
import NewUserModal from "../../components/Modals/NewUserModal";
import UsersTable from "../../components/Tables/UsersTable";

const UsersManagement = () => {
    return (
        <>
            <Header />
            <div className={styles.usersManagementContainer}>
                <div className={styles.usersTitleAndButtonContainer}>
                    <h2>Gestionar usuarios</h2>
                    <NewUserModal />
                </div>
                <div className={styles.usersTableContainer}>
                    <UsersTable />
                </div>

                <div />
            </div>
        </>
    );
};
export default UsersManagement;
