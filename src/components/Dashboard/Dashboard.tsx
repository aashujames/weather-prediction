import "./dashboard.css";
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
        </div>
    );
};

export default Dashboard;
