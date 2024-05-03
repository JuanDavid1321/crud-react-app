import "./Home.css";
import { useGoogleAuth } from "../../context/GoogleAuthContext";
import WelcomeCard from "../../components/InfoCards/WelcomeCard/WelcomeCard";
import HeaderForGoogleUsers from "../../components/Header/HeaderForGoogleUsers";
import Header from "../../components/Header/Header";

const Home = () => {
    const { googleUser, isLoggedInWithGoogle } = useGoogleAuth();
    return (
        <>
            {isLoggedInWithGoogle ? (
                <div className="home">
                    <HeaderForGoogleUsers />
                    <WelcomeCard userName={googleUser.displayName} />
                </div>
            ) : (
                <div className="home">
                    <Header />
                    <WelcomeCard userName={"Visitante"} />
                </div>
            )}
        </>
    );
};
export default Home;
