import { useNavigate } from "react-router-dom";

function Navbar() {
    const nav = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("auth");
        nav("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm" style={{ minHeight: "75px" }}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Dashboard</span>
                <button className="btn btn-outline-primary ms-auto" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
