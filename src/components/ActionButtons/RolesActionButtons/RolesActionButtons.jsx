import ActionButton from "../ActionButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const RolesActionButtons = () => {
    // TODO: implement delete action and pass it the user id to be deleted (remember to use sweetalert2)
    const handleDelete = () => {
        console.log("Funciona la eliminación");
    };

    return (
        <>
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

export default RolesActionButtons;
