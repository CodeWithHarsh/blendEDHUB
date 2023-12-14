import React from "react";
import "../styles/Leaderboard.scss"; // Import your SCSS file

const childrenData = [
    {
        id: 1,
        name: "Child 1",
        score: 150,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Child 2",
        score: 200,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 1,
        name: "Child 1",
        score: 150,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Child 2",
        score: 200,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 1,
        name: "Child 1",
        score: 150,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Child 2",
        score: 200,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 1,
        name: "Child 1",
        score: 150,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Child 2",
        score: 200,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 1,
        name: "Child 1",
        score: 150,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Child 2",
        score: 200,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    // Add more children data as needed
];

const Leaderboard = () => {
    return (
        <div className="leaderboard">
            <h3 className="heading">Leader board</h3>
            {childrenData.map((child) => (
                <div key={child.id} className="leaderboard__card">
                    <img
                        src={child.imageUrl}
                        alt={child.name}
                        className="leaderboard__image"
                    />
                    <div className="leaderboard__details">
                        <h3 className="leaderboard__name">{child.name}</h3>
                        <p className="leaderboard__score">
                            Score: {child.score}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Leaderboard;
