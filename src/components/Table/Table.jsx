import styles from "./Table.module.css"

const Table = ({data, columns}) => {
    return ( 
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key}>{column.title}</th>
                    ))}
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        {columns.map((column) => (
                            <td key={column.key}>{item[column.key]}</td>
                        ))}
                        <td>
                            {/* <button className="btn-crud-ver">Ver</button> */}
                            <button className="btn-crud-editar">Editar</button>
                            <button className="btn-crud-eliminar">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default Table;