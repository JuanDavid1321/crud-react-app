import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css"
const Header = () => {
    return ( 
        <header className={styles.header}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <p>Inicio</p>
            </Link>
            <Navbar/>
        </header>
    );
}
 
export default Header;