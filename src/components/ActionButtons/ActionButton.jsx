import { buttonStyles } from "../../utils/actionButtonStyles";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../utils/modalStyles";

// Recieves  props from parent component, for reusability
const ActionButton = (props) => {
    const appliedStyles = buttonStyles[props.buttonType];
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Conditional rendering for the delete action button,
                if it exists we don´t have to popup a modal, just have to delete the item  
            */}
            {props.deleteAction ? (
                <button onClick={props.deleteAction} style={appliedStyles}>
                    {props.IconComponent}
                </button>
            ) : (
                <button onClick={handleOpen} style={appliedStyles}>
                    {props.IconComponent}
                </button>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>{props.ModalComponent}</Box>
            </Modal>
        </>
    );
};
export default ActionButton;
