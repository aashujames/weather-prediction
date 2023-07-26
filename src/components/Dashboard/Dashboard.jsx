import "./dashboard.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const ToggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <div className="main-container">
            <Navbar ToggleSidebar={ToggleSidebar} />
            <Sidebar showSidebar={showSidebar} ToggleSidebar={ToggleSidebar} />
        </div>
    );
};

export default Dashboard;
