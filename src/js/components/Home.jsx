import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../../styles/index.css";

const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    const handleClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="traffic-light">
            <div
                onClick={() => handleClick("red")}
                className={`light red ${selectedColor === "red" ? "glow" : ""}`}
            ></div>
            <div
                onClick={() => handleClick("yellow")}
                className={`light yellow ${selectedColor === "yellow" ? "glow" : ""}`}
            ></div>
            <div
                onClick={() => handleClick("green")}
                className={`light green ${selectedColor === "green" ? "glow" : ""}`}
            ></div>
            <button onClick={() => {
                let nextColor;
                if (selectedColor === "red") {
                    nextColor = "yellow";
                } else if (selectedColor === "yellow") {
                    nextColor = "green";
                } else if (selectedColor === "green") {
                    nextColor = "red";
                } else {
                    nextColor = "red"; 
                }
                setSelectedColor(nextColor);
            }}>
                Cambiar Automático
            </button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#app")); 
root.render(<TrafficLight />);