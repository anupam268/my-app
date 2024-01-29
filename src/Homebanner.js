import React from "react";
import "./HomeBanner.css";

const Banner = () => {
    return (
        <div className="banner">
            <p className="your-gateway-to-the">
                <span className="text-wrapper">Your Gateway to the</span>
                <span className="span">
                    {" "}
                    <br />
                </span>
                <span className="text-wrapper-2">Future powered by AI </span>
                <span className="text-wrapper">Innovation!</span>
            </p>
        </div>
    );
};

export default Banner;