import styles from "./Header.module.css";
import { useGoogleAuth } from "../../context/GoogleAuthContext"; //for loging out
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
    const { googleLogOut } = useGoogleAuth(); //destructuring  assignment to access the function 'logOut' from GoogleAuthContext

    return (
        <header className={styles.header}>
            <Link to="/" style={{ display: "flex" }}>
                <HomeRoundedIcon sx={{ fontSize: 30, paddingLeft: "5vw" }} />
            </Link>
            <Navbar />
            <Link to="/login" style={{ display: "flex" }}>
                <LogoutIcon sx={{ fontSize: 30 }} onClick={googleLogOut} />
            </Link>
        </header>
    );
};

export default Header;
