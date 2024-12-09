import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbar() {
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Day #4</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item d-flex align-items-center">
                                <Link className="nav-link active position-relative d-flex align-items-center" to="/cart" style={{ fontSize: 24, marginRight: 30 }}
                                >
                                    <BsCart4 />
                                    <span
                                        className="badge bg-dark position-absolute top-1 start-100 translate-middle"
                                        style={{
                                            fontSize: "0.75rem",
                                            padding: "3px 7px",
                                            borderRadius: "50%",
                                        }}
                                    >
                                        {cartTotalQuantity}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
