import React, { useContext, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { WeatherContext } from "../../context";

const Home = () => {
    const { setSwitchPage } = useContext(WeatherContext);

    useEffect(() => {
        setSwitchPage("H");
    }, []);

    return (
        <div>
            <Dashboard />
            <div className="center">
                <div>data here</div>
            </div>
        </div>
    );
};

export default Home;
