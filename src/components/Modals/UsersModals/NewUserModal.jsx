import styles from "./NewUserModal.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NewUserForm from "../../NewUserForm/NewUserForm";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    p: 4,
    padding: "20px 60px",
    borderRadius: "20px",
    boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

export default function NewUserModal() {
    const [open, setOpen] = React.useState(false);
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
