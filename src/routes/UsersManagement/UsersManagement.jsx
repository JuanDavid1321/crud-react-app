import styles from "./UsersManagement.module.css";
import Header from "../../components/Header/Header";
import NewUserForm from "../../components/NewUserForm/NewUserForm";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import CreateActionButtonAndModal from "../../components/Modals/CreateActionButtonAndModal";
import UsersTable from "../../components/Tables/UsersTable";
import UsersActionButtons from "../../components/ActionButtons/UsersActionButtons/UsersActionButtons";

const UsersManagement = () => {
    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "firstName", headerName: "First name", flex: 1 },
        { field: "lastName", headerName: "Last name", flex: 1 },
    ];

    // TODO: implement delete action and pass it the user id to be deleted (remember to use sweetalert2)
    const handleDelete = () => {
        console.log("Funciona la eliminación");
    };

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
                            ModalContent={NewUserForm}
                        />
                    </div>
                    <UsersTable
                        tableBasicColumns={columns}
                        ActionButtons={UsersActionButtons}
                        handleDelete={handleDelete}
                        ViewActionModal={NewUserForm}
                        UpdateActionModal={NewUserForm}
                    />
                </div>
            </div>
        </>
    );
};
export default UsersManagement;
