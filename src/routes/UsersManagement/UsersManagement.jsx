import styles from "./UsersManagement.module.css";
import Header from "../../components/Header/Header";
import NewUserModal from "../../components/Modals/NewUserModal";
import UsersTable from "../../components/Tables/UsersTable";

const UsersManagement = () => {
    return (
        <div className={styles.usersManagementContainer}>
            <Header />
            <NewUserModal />
            <div className={styles.usersTableContainer}></div>
            <UsersTable />
            <div />
        </div>
    );
};
export default UsersManagement;
