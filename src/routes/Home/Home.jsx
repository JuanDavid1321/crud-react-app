import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import './Home.css'

const Home = () => {
    return ( 
        <div className="home">
            <Header />
            <h1>Bienvenido!</h1>
            <RegisterForm/>
        </div>
    );
}
export default Home;