/* eslint-disable react/prop-types */
import { useAuth } from "../Components/context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ roles, element }) => {
    const { user } = useAuth();
    // not authenticated
    if (!user) {
        return <Navigate to="/" />
    }
    // role not allowed
    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/unauthorised" />
    }
    return element;
}
export default PrivateRoute;