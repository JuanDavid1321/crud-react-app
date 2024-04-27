import Header from "../../components/Header/Header";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import './Home.css'
import { useAuth } from '../../context/AuthContext';

const Home = () => {
    const {user} = useAuth();

    return ( 
        <div className="home">
            <Header />
            <WelcomeCard userName={user.displayName}/>
        </div>
    );
}
export default Home;