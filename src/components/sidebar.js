import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartBar,
    faCalendarAlt,
    faBook,
    faChalkboardTeacher,
    faGraduationCap,
    faUsers,
    faQuestionCircle,
    faClipboardList,
    faUserCheck,
    faEnvelope,
    faTasks,
    faCog,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.scss"; // Import your SCSS file

const options = [
    { icon: faChartBar, label: "Dashboard" },
    { icon: faCalendarAlt, label: "Calendar" },
    { icon: faBook, label: "Library" },
    { icon: faChalkboardTeacher, label: "Classroom" },
    { icon: faGraduationCap, label: "Courses" },
    { icon: faUsers, label: "Co-curricular" },
    { icon: faQuestionCircle, label: "Quizzes" },
    { icon: faClipboardList, label: "Attendance" },
    { icon: faEnvelope, label: "Messages" },
    { icon: faTasks, label: "Assignments" },
    { icon: faCog, label: "Settings" },
    { icon: faSignOutAlt, label: "Log out" },
];

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">BlendEdHub</div>
            <div className="sidebar__menu">
                <ul>
                    {options.map((option, index) => (
                        <div className="optionContainer">
                            <li key={index}>
                                <div className="icon">
                                    <FontAwesomeIcon
                                        icon={option.icon}
                                        size="2x"
                                    />
                                </div>
                                <p className="option">{option.label}</p>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
