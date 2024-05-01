import { DataGrid } from "@mui/x-data-grid";
import UsersActionButtons from "../ActionButtons/UsersActionButtons/UsersActionButtons";
import NewUserForm from "../NewUserForm/NewUserForm";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Swal from "sweetalert2";

const UsersTable = ({ tableBasicColumns, tableType }) => {
    const [data, setData] = useState([]); // for fetching data
    const collectionType = tableType;

    // Hook for getting documents from Firestore Collection
    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshot = await getDocs(
                    collection(db, collectionType)
                );
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            } catch (error) {
                console.log(error);
            } finally {
                //  Always executed
                // Swal alert close when the data is loaded
                Swal.close();
            }
        };
        Swal.fire({
            title: "Actualizando datos",
            didOpen: () => {
                Swal.showLoading();
            },
        });
        fetchData();
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
