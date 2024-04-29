// const ActionButton = ({ style, IconComponent }) => {
//     const readButton = {
//         background: "#08A6C1",
//         cursor: "pointer",
//         borderRadius: "10px",
//         padding: "10px",
//         textAlign: "center",
//     };

//     const updateButton = {
//         background: "#FF9C26",
//         cursor: "pointer",
//         borderRadius: "10px",
//         padding: "10px",
//         textAlign: "center",
//     };

//     const deleteButton = {
//         background: "#DE3C14",
//         cursor: "pointer",
//         borderRadius: "10px",
//         padding: "10px",
//         textAlign: "center",
//     };

//     return (
//         <>
//             <button style={updateButton}>{IconComponent}</button>
//         </>
//     );
// };

// export default ActionButton;
import React from "react";

const buttonStyles = {
    read: {
        background: "none",
        color: "#08A6C1",
        cursor: "pointer",
        borderRadius: "50%",
        padding: "10px",
        textAlign: "center",
    },
    update: {
        background: "none",
        color: "#FF9C26",
        cursor: "pointer",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
    },
    delete: {
        background: "none",
        color: "#DE3C14",
        cursor: "pointer",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
    },
};

const ActionButton = ({ buttonType, IconComponent }) => {
    const appliedStyles = buttonStyles[buttonType];

    return <button style={appliedStyles}>{IconComponent}</button>;
};

export default ActionButton;
