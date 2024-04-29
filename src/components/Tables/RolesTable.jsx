import { DataGrid } from "@mui/x-data-grid";
import RolesActionButtons from "../ActionButtons/RolesActionButtons/RolesActionButtons";

const RolesTable = () => {
    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "role", headerName: "Rol", flex: 1 },
        {
            field: "actions",
            headerName: "Acciones",
            flex: 1,
            renderCell: (params) => {
                return <RolesActionButtons />;
            },
        },
    ];

    const rows = [
        { id: 1, role: "Usuario" },
        { id: 2, role: "Moderador" },
    ];

    return (
        <div
            style={{
                background: "white",
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
};

export default RolesTable;
