import { DataGrid } from "@mui/x-data-grid";
import UsersActionButtons from "../ActionButtons/UsersActionButtons/UsersActionButtons";
import NewUserForm from "../NewUserForm/NewUserForm";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const UsersTable = ({ tableBasicColumns }) => {
    const [data, setData] = useState([]); // for fetching data

    // Hook for getting documents from Firestore Collection 'users'
    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        console.log(data);
    }, []);

    // TODO: implement delete action and pass it the user id to be deleted (remember to use sweetalert2)
    const handleDelete = () => {
        console.log("Funciona la eliminación");
    };
    const columns = [
        ...tableBasicColumns,
        {
            field: "actions",
            headerName: "Acciones",
            flex: 1,
            renderCell: (params) => {
                // const user = users.find((u) => u.id === params.row.id);
                // return <ActionButtons user={user} />;
                return (
                    <UsersActionButtons
                        handleDelete={handleDelete}
                        ViewCard={NewUserForm}
                        UpdateForm={NewUserForm}
                    />
                );
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
                rows={data}
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
