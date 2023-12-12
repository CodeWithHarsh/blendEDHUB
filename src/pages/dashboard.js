import React from "react";
import Sidebar from "../components/sidebar";
import "../styles/Dashboard.scss";
function Dashboard() {
    return (
        <div className="rootDashboard">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="center"></div>
        </div>
    );
}

export default Dashboard;
