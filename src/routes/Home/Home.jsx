import "./Home.css";
import { useGoogleAuth } from "../../context/GoogleAuthContext";
import Header from "../../components/Header/Header";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";

const Home = () => {
    const { googleUser } = useGoogleAuth();
    return (
        <div className="home">
            <Header />
            <WelcomeCard userName={googleUser.displayName} />
        </div>
    );
};
export default Home;
