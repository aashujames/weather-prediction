import "./dashboard.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Sidebar />
        </div>
    );
};

export default Dashboard;
