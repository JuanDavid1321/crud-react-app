import NewUserForm from "../../NewUserForm/NewUserForm";
import ActionButton from "../ActionButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const UsersActionButtons = () => {
    return (
        <>
            <ActionButton
                buttonType={"read"}
                IconComponent={<RemoveRedEyeIcon />}
                ModalComponent={
                    <NewUserForm formTitle={"Crear nuevo usuario"} />
                }
            />
            <ActionButton
                buttonType={"update"}
                IconComponent={<ModeEditIcon />}
            />
            <ActionButton
                buttonType={"delete"}
                IconComponent={<DeleteIcon />}
            />
        </>
    );
};

export default UsersActionButtons;
