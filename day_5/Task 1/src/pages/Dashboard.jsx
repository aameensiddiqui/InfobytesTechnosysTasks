import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Users from "./Users";
import Settings from "./Settings";
import PrivateRoute from "../routes/PrivateRoute";

const Dashboard = () => {
    return (
        <div className="d-flex">
            <div className="w-auto">
                <Sidebar />
            </div>
            <div className="flex-grow-1">
                <Navbar />
                <div className="p-4">
                    <Routes>
                        <Route path="users" element={<PrivateRoute element={<Users />} roles={['admin']} />} />
                        <Route path="settings" element={<PrivateRoute element={<Settings />} roles={['admin']} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
