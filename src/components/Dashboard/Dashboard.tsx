import "./dashboard.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface DashboardProps {
    children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Sidebar />
            <div className="center">
                <Outlet />S
            </div>
        </div>
    );
};

export default Dashboard;
