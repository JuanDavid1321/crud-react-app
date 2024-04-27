import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css"
import LogoutIcon from '@mui/icons-material/Logout';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useAuth } from '../../context/AuthContext'; //for loging out 

const Header = () => {

    const {logOut, user} = useAuth();

    const handleLogOut = async()=>{
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <header className={styles.header}>
            <Link to="/" style={{display: "flex"}}>
                <HomeRoundedIcon sx={{ fontSize: 30, paddingLeft: "5vw"}} />
            </Link>
            <Navbar/>
            <Link to="/login" style={{display: "flex"}}>
                <LogoutIcon 
                    sx={{ fontSize: 30 }}
                    onClick={handleLogOut}
                />
            </Link>
        </header>
    );
}
 
export default Header;