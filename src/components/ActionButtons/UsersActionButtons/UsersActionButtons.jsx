import ActionButton from "../ActionButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const UsersActionButtons = (props) => {
    const { handleDelete, handleView, handleUpdate, ViewCard, UpdateForm } =
        props;

    return (
        <>
            <ActionButton
                buttonType={"read"}
                IconComponent={<RemoveRedEyeIcon />}
                ModalContent={ViewCard} //Replace with the name of the specific action component (card...)
            />
            <ActionButton
                buttonType={"update"}
                IconComponent={<ModeEditIcon />}
                ModalContent={UpdateForm} //Replace with the name of the specific action component (form...)
            />
            <ActionButton
                buttonType={"delete"}
                IconComponent={<DeleteIcon />}
                deleteAction={handleDelete}
            />
        </>
    );
};

export default UsersActionButtons;
