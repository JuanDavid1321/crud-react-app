export const usersColumns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
        field: "image",
        headerName: "Imagen",
        flex: 1,
        renderCell: (params) => {
            return (
                <div
                    className="cellWithImg"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "5px",
                    }}
                >
                    <img
                        className="cellImg"
                        src={params.row.image}
                        alt="avatar"
                        style={{
                            with: "40px",
                            height: "40px",
                            borderRadius: "50%",
                        }}
                    />
                    {params.row.username}
                </div>
            );
        },
    },
    { field: "email", headerName: "Correo electrónico", flex: 1 },
    { field: "firstName", headerName: "Nombres", flex: 1 },
    { field: "lastName", headerName: "Apellidos", flex: 1 },
    { field: "role", headerName: "Rol", flex: 1 },
];
