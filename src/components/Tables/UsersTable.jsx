import { DataGrid } from "@mui/x-data-grid";
import UsersActionButtons from "../ActionButtons/UsersActionButtons/UsersActionButtons";

const UsersTable = () => {
    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "firstName", headerName: "First name", flex: 1 },
        { field: "lastName", headerName: "Last name", flex: 1 },
        {
            field: "actions",
            headerName: "Acciones",
            flex: 1,
            renderCell: (params) => {
                // const user = users.find((u) => u.id === params.row.id);
                // return <ActionButtons user={user} />;
                return <UsersActionButtons />;
            },
        },
    ];

    const rows = [
        { id: 1, lastName: "Snow", firstName: "Jon" },
        { id: 2, lastName: "Lannister", firstName: "Cersei" },
        { id: 3, lastName: "Lannister", firstName: "Jaime" },
        { id: 4, lastName: "Stark", firstName: "Arya" },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
        { id: 6, lastName: "Melisandre", firstName: null },
        { id: 7, lastName: "Clifford", firstName: "Ferrara" },
        { id: 8, lastName: "Frances", firstName: "Rossini" },
        { id: 9, lastName: "Roxie", firstName: "Harvey" },
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

export default UsersTable;
