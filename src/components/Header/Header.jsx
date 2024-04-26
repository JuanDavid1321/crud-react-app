import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css"
import LogoutIcon from '@mui/icons-material/Logout';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <HomeRoundedIcon className={styles.home} />
            </Link>
            <Navbar/>
            <Link to="/login">
                <LogoutIcon className={styles.logOut}/>
            </Link>
        </header>
    );
}
 
export default Header;