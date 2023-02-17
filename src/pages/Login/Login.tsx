import AuthCard from "../../components/AuthCard/AuthCard";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./login.css";

const Login = () => {
    return (
        <AuthCard textFooter="Don't have an account? Signup">
            {" "}
            <div className="top-form">
                <div className="form-inside">
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                </div>
                <div className="check">
                    {" "}
                    <input className="input-check" type="checkbox" /> Remember
                    me
                </div>

                <Button>Login</Button>
            </div>
        </AuthCard>
    );
};

export default Login;
