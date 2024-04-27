import "./Home.css";
import { useGoogleAuth } from "../../context/GoogleAuthContext";
import Header from "../../components/Header/Header";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";

const Home = () => {
    const { user, isLoggedInWithGoogle } = useGoogleAuth();
    console.log(user);
    console.log(isLoggedInWithGoogle);
    return (
        <div className="home">
            <Header />
            <WelcomeCard userName={user.displayName} />
        </div>
    );
};
export default Home;
