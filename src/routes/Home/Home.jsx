import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Home = () => {
    return ( 
        <div className="Home">
            <Header />
            <h1>Bienvenido!</h1>
            <RegisterForm/>
        </div>
    );
}
export default Home;