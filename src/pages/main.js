import Dashboard from "./dashboard";
import Sidebar from "../components/sidebar";
import "../styles/Main.scss";
const Main = () => {
    return (
        <div className="rootMain">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="center">
                <Dashboard />
            </div>
        </div>
    );
};

export default Main;
