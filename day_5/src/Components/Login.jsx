import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const nav = useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        if (email === "admin@infobytestechnosys.in" && password === "9284760415") {
            login({ role: "admin", email });
            nav("/dashboard/users");
        }
        else {
            nav("/unauthorised");
        }
    }

    return (
        <>
            <div className="container my-1 w-50 text-center" style={{ padding: "70px" }}>
                <h1
                    className="my-4 text-white">
                    Admin Login
                </h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4 my-3" htmlFor="email">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control text-white bg-dark"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                            onChange={onChange}
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div className="mb-4" htmlFor="password">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control text-white bg-dark"
                            id="password"
                            name="password"
                            onChange={onChange}
                            minLength={5}
                            autoComplete="current-password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-outline-primary">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
