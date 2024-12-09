import { Link } from "react-router-dom";
import { useTheme } from "./Context/ThemeContext";
import { useNotification } from "./Context/NotificationContext";

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { state } = useNotification();

    return (
        <div >
            <nav className={`navbar navbar-expand-lg fixed-top navbar-dark bg-${theme}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Day #3</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/notif">Manage Notifications
                                    {state.notifications.length > 0 &&
                                        <span
                                            className={`badge rounded bg-${theme === "dark" ? "light" : "danger"} 
                                            text-${theme === "dark" ? "dark" : "light"}`}
                                            style={{ fontSize: "14px", marginLeft: 10 }}>
                                            ({state.notifCount}) new notifications
                                        </span>}
                                </Link>
                            </li>
                        </ul>
                        <div>
                            {theme === "primary" ? <img src="sunny.png" alt="light"
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    cursor: "pointer",
                                    marginRight: "50px",
                                }}
                                onClick={() => toggleTheme({ type: "TOGGLE_THEME" })} /> :
                                <img src="./moon.png" alt="dark"
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                        cursor: "pointer",
                                        marginRight: "50px",
                                    }}
                                    onClick={() => toggleTheme({ type: "TOGGLE_THEME" })} />}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
