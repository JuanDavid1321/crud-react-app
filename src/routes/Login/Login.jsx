import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./Login.css"

const Login = () => {
    return (
        <div className="login">
            <RegisterForm formTitle={"Registrarse"}/>
        </div> 
    );
}
export default Login;