import styles from "./NewUserModal.module.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NewUserForm from "../../NewUserForm/NewUserForm";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import { modalStyle } from "../../../utils/modalStyles";

export default function NewUserModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button className={styles.newUserButton} onClick={handleOpen}>
                <PersonAddRoundedIcon />{" "}
                <p className={styles.buttonText}>Nuevo usuario</p>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <NewUserForm formTitle={"Crear nuevo usuario"} />
                </Box>
            </Modal>
        </>
    );
}
