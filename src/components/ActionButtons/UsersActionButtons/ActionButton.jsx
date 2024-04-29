const ActionButton = ({ style, IconComponent }) => {
    const readButton = {
        background: "#08A6C1",
        cursor: "pointer",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
    };

    const updateButton = {
        background: "#FF9C26",
        cursor: "pointer",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
    };

    const deleteButton = {
        background: "#DE3C14",
        cursor: "pointer",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
    };

    return (
        <>
            <button style={updateButton}>{IconComponent}</button>
        </>
    );
};

export default ActionButton;
