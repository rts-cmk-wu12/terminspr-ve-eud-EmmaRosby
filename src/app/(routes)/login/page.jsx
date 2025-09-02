import LoginForm from "@/components/ui/login-form/login-form";
import "./login.scss";

function Login() {
    return (  
        <>
            <main className="login">
                <div className="overlay">
                <LoginForm />

                </div>
            </main>
        </>
    );
}

export default Login;