import styles from "./UsersManagement.module.css";
import Header from "../../components/Header/Header";
import NewUserModal from "../../components/Modals/NewUserModal";
import UsersTable from "../../components/Tables/UsersTable";

const UsersManagement = () => {
    return (
        <>
            <Header />
            <div className={styles.usersManagementContainer}>
                <NewUserModal />
                <div className={styles.usersTableContainer}>
                    <UsersTable />
                </div>

                <div />
            </div>
        </>
    );
};
export default UsersManagement;
