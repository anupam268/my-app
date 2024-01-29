import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="div">
                <div className="overlap-group">
                    <div className="navigation-top-bar">
                        <div className="text-wrapper">GTS AI OPS</div>
                    </div>
                    <div className="navigation-top-bar-2">
                        <div className="navbar">
                            <div className="text-wrapper-2">HOME</div>
                            <div className="text-wrapper-3">ANOMALIES</div>
                            <div className="text-wrapper-3">INFRASTRUCTURE</div>
                            <div className="text-wrapper-3">APPLICATIONS</div>
                        </div>
                        <div className="frame">
                            <div className="login">LOGIN TO DASHBOAD</div>
                        </div>
                    </div>
                </div>
                <p className="your-gateway-to-the">
                    <span className="span">Your Gateway to the</span>
                    <span className="text-wrapper-4">
                        {" "}
                        <br />
                    </span>
                    <span className="text-wrapper-5">Future powered by AI </span>
                    <span className="span">Innovation!</span>
                </p>
                <div className="overlap">
                    <div className="element">
                        <p className="title">
                            1. Anomaly Detection Engine
                            <br />
                            Uncover the Unseen
                        </p>
                        <p className="body">
                            Our state-of-the-art Anomaly Detection Engine utilizes advanced AI algorithms to sift through vast
                            datasets, identifying irregular patterns and outliers that may elude traditional analysis methods.
                            Navigate confidently through the uncharted realm of data, uncovering hidden insights and potential threats
                            with precision and speed.
                        </p>
                    </div>
                    <div className="element-2">
                        <p className="title">
                            2. Real-time Alerts <br />
                            and Insights
                        </p>
                        <p className="body">
                            Stay Ahead of the Curve: Receive instant notifications and actionable insights as our platform
                            continuously monitors your data streams. Our real-time alert system keeps you one step ahead, ensuring
                            that anomalies are identified and addressed promptly. Navigate the unpredictable landscape of data with
                            confidence,
                        </p>
                    </div>
                    <div className="element-3">
                        <div className="title">
                            3. Adaptive Learning <br />
                            Capabilities
                        </div>
                        <p className="body">
                            Evolve with the Uncharted: Embrace the ever-changing nature of data with our adaptive learning
                            capabilities. Our system learns and evolves over time, adapting to new patterns and anomalies as they
                            emerge. Navigate the uncharted realm with a tool that not only identifies anomalies today but also
                            anticipates and adjusts to
                        </p>
                    </div>
                    <p className="p">AI-Powered Evolution: Unveiling the Future of Application Management</p>
                </div>
                <div className="products-wrapper">
                    <div className="products">APPLICATION DASHBOARD</div>
                </div>
            </div>
        </div>
    );
};


export default Home;