import { buttonStyles } from "../../utils/actionButtonStyles";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../utils/modalStyles";

// Recieves  props from parent component, for reusability
const ActionButton = ({ buttonType, IconComponent, ModalComponent }) => {
    const appliedStyles = buttonStyles[buttonType];
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button onClick={handleOpen} style={appliedStyles}>
                {IconComponent}
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>{ModalComponent}</Box>
            </Modal>
        </>
    );
};
export default ActionButton;
