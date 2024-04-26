import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css"
import LogoutIcon from '@mui/icons-material/Logout';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <Link to="/" style={{display: "flex"}}>
                <HomeRoundedIcon sx={{ fontSize: 30, paddingLeft: "5vw",  }} />
            </Link>
            <Navbar/>
            <Link to="/login" style={{display: "flex"}}>
                <LogoutIcon sx={{ fontSize: 30 }}/>
            </Link>
        </header>
    );
}
 
export default Header;