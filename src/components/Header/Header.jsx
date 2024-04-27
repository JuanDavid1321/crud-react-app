import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <HomeRoundedIcon sx={{ fontSize: 34, paddingLeft: "5vw" }} />
            </Link>
            <Navbar />
            <Link to="/login" style={{ display: "flex", alignItems: "center" }}>
                {/* implement onClick={logOut} for mailAndPasswordAuth */}
                <LogoutIcon sx={{ fontSize: 34 }} />
            </Link>
        </header>
    );
};

export default Header;
