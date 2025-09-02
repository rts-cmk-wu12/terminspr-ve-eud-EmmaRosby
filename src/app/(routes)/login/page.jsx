import LoginForm from "@/components/ui/login-form/login-form";
import "./login.scss";
import Nav from "@/components/ui/nav/nav";

function Login() {
    return (  
        <>
            <main className="login">
                <div className="overlay">
                <LoginForm />
                </div>
                <Nav />
            </main>
        </>
    );
}

export default Login;