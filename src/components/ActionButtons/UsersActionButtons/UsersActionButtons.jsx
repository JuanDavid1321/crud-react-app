import ActionButton from "../ActionButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const UsersActionButtons = () => {
    // TODO: implement delete action and pass it the user id to be deleted (remember to use sweetalert2)
    const handleDelete = () => {
        console.log("Funciona la eliminación");
    };

    return (
        <>
            <ActionButton
                buttonType={"read"}
                IconComponent={<RemoveRedEyeIcon />}
                ModalComponent={<></>}
            />
            <ActionButton
                buttonType={"update"}
                IconComponent={<ModeEditIcon />}
                ModalComponent={<></>}
            />
            <ActionButton
                buttonType={"delete"}
                IconComponent={<DeleteIcon />}
                ModalComponent={<></>}
                deleteAction={handleDelete}
            />
        </>
    );
};

export default UsersActionButtons;
