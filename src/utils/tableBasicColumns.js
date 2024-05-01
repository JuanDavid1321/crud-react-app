export const usersColumns = [
    { field: "id", headerName: "ID", with: 50 },
    {
        field: "user",
        headerName: "Usuario",
        flex: 1,
        renderCell: (params) => {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        paddingTop: "1px",
                    }}
                >
                    <img
                        src={params.row.image}
                        alt="avatar"
                        style={{
                            with: "40px",
                            height: "40px",
                            borderRadius: "50%",
                        }}
                    />
                    <p style={{ marginLeft: "8px" }}>
                        {params.row.firstName} {params.row.lastName}
                    </p>
                </div>
            );
        },
    },
    { field: "email", headerName: "Correo electrónico", flex: 1 },
    { field: "password", headerName: "Contraseña", flex: 1 },
    { field: "role", headerName: "Rol", flex: 1 },
];
