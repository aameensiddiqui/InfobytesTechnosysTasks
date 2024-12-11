import { useNavigate } from "react-router-dom"

function Unauthorised() {
    const nav = useNavigate();
    const handleNavigate = () => {
        nav("/");
    }
    return (
        <div className="container text-center my-5 p-5">
            <h1 style={{ fontSize: 100 }}>401</h1>
            <p style={{ fontSize: 30 }}>Unauthorised</p>
            <hr className="text-secondary w-100" />
            <button className="btn btn-outline-primary" onClick={handleNavigate}><span>&#8612;</span> Back to Login</button>
        </div>
    )
}

export default Unauthorised
