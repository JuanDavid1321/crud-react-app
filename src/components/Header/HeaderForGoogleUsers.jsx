import styles from "./HeaderForGoogleUsers.module.css";
import { useGoogleAuth } from "../../context/GoogleAuthContext"; //for loging out
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutIcon from "@mui/icons-material/Logout";

const HeaderForGoogleUsers = () => {
    const { googleLogOut } = useGoogleAuth(); //destructuring  assignment to access the function 'logOut' from GoogleAuthContext

    return (
        <header className={styles.header}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <HomeRoundedIcon sx={{ fontSize: 34, paddingLeft: "5vw" }} />
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>Opción 1</li>
                    <li className={styles.li}>Opción 2</li>
                    <li className={styles.li}>Opción 3</li>
                </ul>
            </nav>
            <Link to="/login" style={{ display: "flex", alignItems: "center" }}>
                {/* implement onClick={logOut} for mailAndPasswordAuth */}
                <LogoutIcon sx={{ fontSize: 34 }} onClick={googleLogOut} />
            </Link>
        </header>
    );
};

export default HeaderForGoogleUsers;
