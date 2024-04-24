import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

const UsersManagement = () => {
    // Simulación de datos (reemplazar con tu lógica de datos)
    const data = [
        { id: 1, nombre: 'Usuario 1', correo: 'usuario1@correo.com', rol: 'Rol 1' },
        { id: 2, nombre: 'Usuario 2', correo: 'usuario2@correo.com', rol: 'Rol 2' },
        // ... Más datos
    ];

    const columns = [
        // { key: 'id', title: 'ID' },
        { key: 'nombre', title: 'Nombre' },
        { key: 'correo', title: 'Correo' },
        { key: 'rol', title: 'Rol' },
    ];

    return ( 
        <>
            <Header/>
            <div className="gestionar-usuarios" style={{marginLeft: "20px",paddingLeft: "5vw"}}>
                <h2>Gestionar Usuarios</h2>
                <Table data={data} columns={columns} />
            </div>  
        </>
        
    );
}
export default UsersManagement;