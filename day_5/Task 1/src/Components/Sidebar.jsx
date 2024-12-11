import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="d-flex flex-column bg-dark text-white vh-100 p-3 shadow-sm">
            <div className="mb-4 text-center">
                <i className="bi bi-code-slash fs-3 me-2"></i>
                <span className="fs-4 fw-bold">Day #5</span>
                <hr className="text-secondary" />
            </div>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item mb-2">
                    <Link
                        className="nav-link d-flex align-items-center py-2 px-3 text-decoration-none hover-highlight"
                        to="/dashboard/users"
                    >
                        <i className="bi bi-people-fill me-3 fs-5"></i>
                        <span className="fs-5">Users</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link d-flex align-items-center py-2 px-3 text-decoration-none hover-highlight"
                        to="/dashboard/settings"
                    >
                        <i className="bi bi-gear-fill me-3 fs-5"></i>
                        <span className="fs-5">Settings</span>
                    </Link>
                </li>
            </ul>
            <div>
                <hr className="text-secondary" />
                <i className="bi bi-person-circle me-3 fs-4"></i>
                <span className="fs-5">Admin</span>
            </div>
        </div>
    );
}

export default Sidebar;
