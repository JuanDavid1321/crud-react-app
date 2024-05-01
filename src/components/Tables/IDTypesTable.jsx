import { DataGrid } from "@mui/x-data-grid";
import IDTypesActionButtons from "../ActionButtons/IDTypesActionButtons/IDTypesActionButtons";

const IDTypesTable = () => {
    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "idType", headerName: "Tipo de documento", flex: 1 },
        { field: "description", headerName: "Descripción", flex: 1 },
        {
            field: "actions",
            headerName: "Acciones",
            flex: 1,
            renderCell: (params) => {
                return <IDTypesActionButtons />;
            },
        },
    ];

    const rows = [
        { id: 1, idType: "C.C.", description: "Cédula de ciudadanía" },
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

export default IDTypesTable;
