import styles from "./HeaderForGoogleUsers.module.css";
import { Link } from "react-router-dom";
import { useGoogleAuth } from "../../context/GoogleAuthContext"; //for loging out
import Navbar from "../Navbar/Navbar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutIcon from "@mui/icons-material/Logout";

const HeaderForGoogleUsers = () => {
    const { googleLogOut } = useGoogleAuth(); //destructuring  assignment to access the function 'logOut' from GoogleAuthContext
    return (
        <header className={styles.header}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <HomeRoundedIcon sx={{ fontSize: 34, paddingLeft: "5vw" }} />
            </Link>
            <Navbar />
            <Link to="/login" style={{ display: "flex", alignItems: "center" }}>
                {/* implement onClick={logOut} for mailAndPasswordAuth */}
                <LogoutIcon sx={{ fontSize: 34 }} onClick={googleLogOut} />
            </Link>
        </header>
    );
};

export default HeaderForGoogleUsers;
